import React, { Component } from 'react'
import styled from '@emotion/styled';
import axios from 'axios';

import { mainDetails } from './helpers/pokemonCreator'
import  colors  from './styles/colors'

import SearchBar from './components/searchBar/SearchBar'
import Pokemon from './components/pokemon/Pokemon'
import Table from './components/table/Table'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      pokemonsList: [],
      pokemonDetails: {},
      activeDisplay: false
    };
  }

  /**
   * 
   * @param {pokemon} String 
   * its a string representing the pokemon that we 
   * want too look for 
   * 
   * the async keyword binds the this keyword into the instance
   * remember that you can use:
   * 
   * (event) => {this.onSearchSubmit(event)} to bind the event too
   */
  onSearchSubmmit = async pokemonName => {
    try {
      const details = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`),
            data = details.data;

      this.setState({
        pokemonDetails: mainDetails(data),
        activeDisplay: true
      });

    } catch(error) {
      console.log(`ERROR :::=> ${error}`);
    }
  }

  async componentDidMount() {
    try {
      const getPokeList = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      let pokeList = await getPokeList.data,
          results = pokeList.results;

      this.setState({ 
        pokemonsList: results,
      });
    } catch(error) {
      console.log(`ERROR :::=> ${error}`);
    }
  };
  
  render() {
    let list        = this.state.pokemonsList,
        showDetails = this.state.activeDisplay,
        details     = this.state.pokemonDetails;

    return (
      <StApp>
        <SearchBar onSubmit={this.onSearchSubmmit}/>
        <Content>
          <StTable 
            list={list} 
            showDetails={showDetails} 
            onSubmit={this.onSearchSubmmit}/>
          <StPokemon 
            details={details} 
            showDetails={showDetails} />
        </Content>
      </StApp>
    )
  }
};

const StApp = styled.div`
  align-items: center;
  background-color: ${colors.crimson};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  text-align: center;
  width: 100vw;
`;

const Content = styled.div`
  align-items: center;
  display: flex; 
  flex-flow: row nowrap;
  justify-content: space-evenly;
  width: 100%;
`;

const StTable = styled(Table)`
  width: 45%;
`;

const StPokemon = styled(Pokemon)`
  width: 45%;
`;
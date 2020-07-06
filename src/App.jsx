import React, { Component } from 'react'
import axios from 'axios';

import { mainDetails } from './helpers/pokemonCreator'
import { StApp, Content, StTable, StPokemon } from './App_styles';

import SearchBar from './components/searchBar/SearchBar'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
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
    let showDetails = this.state.activeDisplay,
        details     = this.state.pokemonDetails;

    return (
      <StApp>
        <SearchBar onSubmit={this.onSearchSubmmit}/>
        <Content>
          <StTable 
            //list={list} 
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

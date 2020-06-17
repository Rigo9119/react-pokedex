import React, { Component } from 'react'
import styled from '@emotion/styled';
import axios from 'axios';

import SearchBar from './components/searchBar/SearchBar'
import Pokemon from './components/pokemon/Pokemon'
import Table from './components/table/Table'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      pokemonsList: [],
      pokemonDetails: {},
      activeDisplay: false,
      pokemonSearch: ''
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
        pokemonDetails: this.pokemonConstructor(data),
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

  pokemonConstructor(data) {

    let getTypes = data && data.types?.[0],
        getSpecies = data && data.species,
        getStats = data && data.stats,
        statsNumbers = getStats.map(el => el.base_stat),
        statsNames = getStats.map(el => el.stat.name),
        getAbilities = data && data.abilities,
        abilitiesArr = getAbilities.map(el => el.ability.name),
        abilities = abilitiesArr.join(', '),
        types   = data && getTypes?.type.name,
        species = data && getSpecies?.name,
        expBase = data && data.base_experience,    
        name = data && data.name,
        height = data && data.height,
        weight = data && data.weight,
        hp = statsNames[0],
        hp_stat = statsNumbers[0],
        attack = statsNames[1],
        attack_stat = statsNumbers[1],
        defense = statsNames[2],
        defense_stat = statsNumbers[2],
        spAttack = statsNames[3],
        spAttack_stat = statsNumbers[3],
        spDefense = statsNames[4],
        spDefense_stat = statsNumbers[4],
        speed = statsNames[5],
        speed_stat = statsNumbers[5],
        stats_title = 'Stats'

      return {
        abilities,
        types,
        species,
        expBase,
        name,
        height,
        weight,
        hp,
        hp_stat,
        attack,
        attack_stat,
        defense,
        defense_stat,
        spAttack,
        spAttack_stat,
        spDefense,
        spDefense_stat,
        speed,
        speed_stat,
        stats_title
      }
  }

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
            showDetails={showDetails} />
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
  background-color: crimson;
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
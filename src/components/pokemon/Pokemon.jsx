import React from 'react';

import { Wrapper } from './Pokemon_styles';

import PokemonImg from './PokemonImg.jsx';
import PokemonDetails from './PokemonDetails.jsx';
const Pokemon = ({ details, showDetails }) => {

  return (
    <Wrapper>
      <PokemonImg />
      <PokemonDetails 
        data={ details }
        showDetails={showDetails}/>
    </Wrapper>
  );
};


export default Pokemon;

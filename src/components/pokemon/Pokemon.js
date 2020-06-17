import React from 'react';
import styled from '@emotion/styled';

import PokemonImg from './PokemonImg';
import PokemonDetails from './PokemonDetails';


const Pokemon = ({ details, showDetails }) => {
  let data = details;

  return (
    <Wrapper>
      <PokemonImg />
      <PokemonDetails data={ data } showDetails={showDetails}/>
    </Wrapper>
  );
};


export default Pokemon;

// styles

const Wrapper = styled.div``;

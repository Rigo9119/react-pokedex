import React from 'react';
import styled from '@emotion/styled';

import PokemonImg from './PokemonImg';
import PokemonDetails from './PokemonDetails';


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

// styles

const Wrapper = styled.div``;

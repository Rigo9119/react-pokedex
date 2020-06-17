import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const PokemonImg = props => {
  return (
    <Picture>
      <Img alt={props.alt} src={props.src}/>
    </Picture>
  );
};


PokemonImg.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string
};

export default PokemonImg;

// Styles

const Picture = styled.picture``;

const Img = styled.img``;

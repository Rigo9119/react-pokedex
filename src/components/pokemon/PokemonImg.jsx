import React from 'react';
import PropTypes from 'prop-types';

import { Picture, Img } from './PokemonImg_styles';
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


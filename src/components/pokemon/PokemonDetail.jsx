import React from 'react';
import PropTypes from 'prop-types';

import { Detail, Title, Text } from './PokemonDetail_styles';
const PokemonDetail = (props) => {
  return (
    <Detail>
      <Title>{props.title}</Title>
      <Text>{props.detail}</Text>
    </Detail>
  );
};


PokemonDetail.propTypes = {
  title: PropTypes.string,
};

export default PokemonDetail;

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'

import colors from '../../styles/colors'

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

// Styles

const Detail = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 5px;
  width: 100%;
`;

const Title = styled.h4`
  font-size: 18px;
  padding-bottom: 8px;
  width: 100%;
`;

const Text = styled.p`
  color: ${colors.yellow};
  font-size: 14px;
  width: 100%;
`;
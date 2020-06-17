import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';


const TableRow = props => {
  return (
    <Row>
      {props.children}
    </Row>
  );
};


TableRow.propTypes = {
  chidlren: PropTypes.array
};


export default TableRow;

// styles

const Row = styled.tr``;
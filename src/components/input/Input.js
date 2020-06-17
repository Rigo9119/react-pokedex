import React from 'react';
import styled from '@emotion/styled';

const Input = (props) => {
  return <StInput 
            type="text"
            value={props.value}
            placeholder="Buscar..."
            onChange={props.onChange}/>;
};

export default Input;

const StInput = styled.input`
  outline: none;
  padding: 10px 60px;
`;

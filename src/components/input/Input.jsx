import React from 'react';

import { StInput } from './Input_styles'

const Input = (props) => {
  return <StInput 
            type="text"
            value={props.value}
            placeholder="Buscar..."
            onChange={props.onChange}/>;
};

export default React.memo(Input);

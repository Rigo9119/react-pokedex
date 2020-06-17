import React from 'react'
import styled from '@emotion/styled'

const TableData = props => {
  return (
    <Tdata>
      {props.children}
    </Tdata>
  )
}

export default TableData;

// styles

const Tdata = styled.td``;

import React from 'react'
import styled from '@emotion/styled'

const TableHeader = props => {
  return (
    <Theader>
      {props.children}
    </Theader>
  )
}

export default TableHeader

//styles

const Theader = styled.th``;

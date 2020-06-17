import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'


import Row from './TableRow'
import Header from './TableHeader'
import Cell from './TableData'

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    }
  };

  /**
   *  arrow functions bind the this keyword 
   *  into the class
   */
  onFormSubmit = (event) => {
    event.preventDefault();
    // here we get the function from parent cmp
    // and pass the input so it gets the data
    this.props.onSubmit(this.state.inputValue);
  }
  render() {
    let data = this.props.list,
        getName = data.map((el, index) => {
          // TODO hay que hacer refactor de esto 
          return (
            <Row key={index}>
              <Cell>
                <Button value={el.name} >{el.name}</Button>
              </Cell>
            </Row>
          )
        });

    return (
      <StTable>
        <Tbody>
          <Row>
            <Header>Nombre</Header>
          </Row>
          {getName}
        </Tbody> 
      </StTable>
    );
  }
};

export default React.memo(Table);

Table.propTypes = {
  data: PropTypes.object,
}

// styles 

const StTable = styled.table``;

const Tbody = styled.tbody``;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  color: white;
  outline: none;
  padding: 5px 10px;
  text-decoration: none;
  text-transform: capitalize;

  :hover {
    border: 1px solid yellow;
    font-weight: bolder;
    color: yellow;
  }
`;

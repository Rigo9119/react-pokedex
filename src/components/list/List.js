import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import colors from '../../styles/colors'

class Table extends Component {
  /**
   *  arrow functions bind the this keyword 
   *  into the class
   */
  onClickSubmit = (event) => {
    event.preventDefault();
    // here we get the function from parent cmp
    // and pass the input so it gets the data
    this.props.onSubmit(event.target.value);
  }

  render() {
    let data = this.props.list,
        getName = data.map((el, index) => {
        // TODO hay que hacer refactor de esto 
        return (
          <Pokemon key={index}>
            <Button 
              value={el.name} 
              onClick={(e) => this.onClickSubmit(e)}>
                {el.name}
            </Button>
          </Pokemon>
        )
      });

    return (
      <PokemonList>
        <ListTitle>
          Nombre
        </ListTitle>
        {getName}
      </PokemonList>
    )
  }
};

export default React.memo(Table);

Table.propTypes = {
  data: PropTypes.object,
}

// styles 

const PokemonList = styled.ul``;

const ListTitle = styled.h4`
  margin-bottom: 20px;
`;

const Pokemon = styled.li`
  list-style: none;
  margin: 2px 0;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  color: ${colors.white};
  outline: none;
  padding: 5px 10px;
  text-decoration: none;
  text-transform: capitalize;

  :hover {
    border: 1px solid ${colors.yellow};
    font-weight: bolder;
    color: yellow;
  }
`;

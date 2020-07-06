import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchPokemonList } from '../../actions/index'

import { PokemonList, ListTitle, Pokemon, Button } from './List_styles'

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

  componentDidMount() {
    // here we call the action as props
    this.props.fetchPokemonList()
  }

  renderPokemonList() {
    let data = this.props.list,
        getName = data.map((el, index) => {
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

    return getName;
  }
  render() {
    return (
      <PokemonList>
        <ListTitle>
          Nombre
        </ListTitle>
        {this.renderPokemonList()}
      </PokemonList>
    )
  }
};

/**
 * This is how we connect redux to the react app, we delcared the mapStateToProps
 * functions pass the state as an argument (it is the entire state object from our
 * redux store) and it will return and object with the key of our reducer and the 
 *  value it will return
 */

const mapStateToProps = (state) => {
  return { list: state.list }
};

export default connect(mapStateToProps, { fetchPokemonList })(React.memo(Table));

Table.propTypes = {
  data: PropTypes.object,
}

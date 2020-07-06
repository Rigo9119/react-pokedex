import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form } from './SearchBar_styles'
import Input from '../input/Input.jsx';

class SearchBar extends Component {
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
    return (
      <Form onSubmit={this.onFormSubmit} >
        <Input 
          value={this.state.inputValue} 
          onChange={(e) => this.setState({ inputValue: e.target.value })}/>
      </Form>
    );
  }
};    


SearchBar.propTypes = {
  text: PropTypes.string
};


export default SearchBar;

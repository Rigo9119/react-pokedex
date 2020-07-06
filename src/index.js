import React from 'react';
import ReactDOM from 'react-dom';
// Provider is a component that the react 
// redux library provide us 
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import './index.css';

import App from './App';
import reducers from './reducers'

// in here we connect the thunk middleware with redux 
// we declare a constant pass the createtore function and 
// as arguments we pass the reducers and the apply middleware function 
// with the thunk middleware as argument
const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    {/** 
     * the provider cmp wrapps around the App cmp
     * and we pass the prop store which will call 
     * the createStore function with the reducers
     * as an argument
    */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


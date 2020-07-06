
/**
 * REDUCERS => produce state or data that we are going to use
 * in our application
 * 
 *  - must return any value besides undefined, even when 
 *    initialize 
 * 
 *  - reducers must not reach out of their functions to return a value 
 *    they should be pure, it can not reach to apis or other functions 
 *    to decided what to return
 * 
 *  - when a reducder gets called it should look to the previous value
 *    and the action so it can return a new value
 * 
 *  - a reducer should be pure, because it just need to use the two 
 *    input arguments (state and action) 
 * 
 *  - we shouldn't mutate the state that we are recieving as an argument
 *    inside of our reducer, strings and numbers are inmutable values 
 *    but in some cases is possible to do it.
 */

import {combineReducers} from 'redux'
import listReducer from './listReducer'
import detailsReducer from './detailsReducer'
import selectREducer from './selectReducer'


export default combineReducers({
  list: listReducer,
  details: detailsReducer,
  selected: selectREducer
});
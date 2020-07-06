import pokeApi from '../api_calls/pokeApi';

// previous way of delcaring actions without thunk BAD !!!
// const getPokemonList = async () => {
//   return {
//     type: 'FETCH_LIST',
//     payload: list
//   }
// };

// this is how we are going to fetch data from the api
// with thunk

const fetchPokemonList = () => async dispatch => {
  const response = await pokeApi.get(),
        results = response.data.results;

  dispatch({
    type: 'FETCH_LIST', 
    payload: results
  }) 
};


const fetchPokemonDetails = async (dispatch, pokemon) => {
  const response = await pokeApi.get(`/${pokemon}`),
        details = response.data;

  dispatch({
    type: 'FETCH_DETAILS', 
    payload: details
  }) 
};

export {
  fetchPokemonList,
  fetchPokemonDetails
}
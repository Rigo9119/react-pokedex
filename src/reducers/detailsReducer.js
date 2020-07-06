// pokemonDetails Reducer 
export default (pokemonDetails = null, action) => {
  if(action.type === 'GET_DETAILS') {
    return action.payload
  }

  return pokemonDetails
};
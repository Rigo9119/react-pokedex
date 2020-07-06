// pokemonList Reducer
export default (pokemonList = [], action) => {
  switch(action.type) {
    case 'FETCH_LIST':
      return action.payload;

    default:
      return pokemonList;
  }
};
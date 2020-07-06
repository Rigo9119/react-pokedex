export default (selelectedPokemon = null, action) => {
  let type = 'SEARCH_POKEMON'

  if(action.type === type) {
    return action.payload
  }

  return selelectedPokemon
};
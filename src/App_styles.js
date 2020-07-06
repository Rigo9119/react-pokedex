import styled from '@emotion/styled'

import colors  from './styles/colors'
import Pokemon from './components/pokemon/Pokemon.jsx'
import Table from './components/list/List.jsx'

const StApp = styled.div`
  align-items: center;
  background-color: ${colors.crimson};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  text-align: center;
  width: 100vw;
`;

const Content = styled.div`
  align-items: center;
  display: flex; 
  flex-flow: row nowrap;
  justify-content: space-evenly;
  width: 100%;
`;

const StTable = styled(Table)`
  width: 35%;
`;

const StPokemon = styled(Pokemon)`
  width: 45%;
`;

export {
  StApp,
  Content,
  StTable,
  StPokemon
}
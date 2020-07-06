import styled from '@emotion/styled'
import colors from '../../styles/colors'

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

export {
  PokemonList,
  ListTitle,
  Pokemon,
  Button
} 

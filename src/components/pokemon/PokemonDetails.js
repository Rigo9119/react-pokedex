import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Detail from './PokemonDetail'

const PokemonDetails = ({data, showDetails}) => {
  
  return (
    <Wrapper showDetails={showDetails}>
      <Details>
        <Name>
          {data.name}
        </Name>
        <Detail 
          title ='Especie'
          detail={data.species}
        />
        <Detail 
          title='Tipos'
          detail={data.types}
        />
        <Detail 
          title='Habilidades'
          detail={data.abilities}
        />
        <Detail 
          title='Peso'
          detail={data.weight}
        />
        <Detail 
          title='Altura'
          detail={data.height}
        />
        <Detail 
          title='Exp base'
          detail={data.expBase}
        />
      </Details>
      <Stats>
        <Title>
          {data.stats_title}
        </Title>
        <Detail 
          title= {data.hp}
          detail={data.hp_stat}
        />
        <Detail 
          title= {data.attack}
          detail={data.attack_stat}
        />
        <Detail 
          title= {data.defense}
          detail={data.defense_stat}
        />
        <Detail 
          title= {data.spAttack}
          detail={data.spAttack_stat}
        />
        <Detail 
          title= {data.spDefense}
          detail={data.spDefense_stat}
        />
        <Detail 
          title= {data.speed}
          detail={data.speed_stat}
        />
      </Stats>
    </Wrapper>
  )
}

PokemonDetails.propTypes = {
  detail: PropTypes.string
}

export default PokemonDetails

// styles

const Wrapper = styled.div `
  align-items: center;
  display: ${props => props.showDetails === true ? 'flex' : 'none'};
  flex-flow: row nowrap;
  justify-content: space-evenly;
  width: 100%;
`;

const Details = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  width: 40%;
`;

const Name = styled.h2`
  color: yellow;
  font-size: 29px;
  text-transform: uppercase;
  margin: 15px 0px;
`;

const Stats = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  width: 40%;
`;

const Title = styled.h3`
  color: white;
  font-size: 24px;
  text-transform: uppercase;
  margin: 15px 0px;
`;

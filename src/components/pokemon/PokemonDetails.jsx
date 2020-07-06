import React from 'react'
import PropTypes from 'prop-types'

import Detail from './PokemonDetail.jsx'
import { Wrapper, Details, Name, Title, Stats } from './PokemonDetails_styles'
const PokemonDetails = ({data, showDetails}) => {
  return (
    <Wrapper showDetails={showDetails}>
      <Details>
        <Name>
          {data.name}
        </Name>
        <Detail 
          title = 'Species'
          detail={data.species}
        />
        <Detail 
          title='Types'
          detail={data.types}
        />
        <Detail 
          title='abilities'
          detail={data.abilities}
        />
        <Detail 
          title='Weight'
          detail={data.weight}
        />
        <Detail 
          title='Height'
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

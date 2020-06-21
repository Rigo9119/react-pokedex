export function mainDetails(details) {

  let getTypes = details && details.types?.[0],
      getSpecies = details && details.species,
      getStats = details && details.stats,
      statsNumbers = getStats.map(el => el.base_stat),
      statsNames = getStats.map(el => el.stat.name),
      getAbilities = details && details.abilities,
      abilitiesArr = getAbilities.map(el => el.ability.name),
      abilities = abilitiesArr.join(', '),
      types   = details && getTypes?.type.name,
      species = details && getSpecies?.name,
      expBase = details && details.base_experience,    
      name = details && details.name,
      height = details && details.height,
      weight = details && details.weight,
      // stats pueden refactorizarce en su propio obj 
      // tienen el mismo problema de undefined 
      // revisar nullchecks 
      hp = statsNames[0],
      hp_stat = statsNumbers[0],
      attack = statsNames[1],
      attack_stat = statsNumbers[1],
      defense = statsNames[2],
      defense_stat = statsNumbers[2],
      spAttack = statsNames[3],
      spAttack_stat = statsNumbers[3],
      spDefense = statsNames[4],
      spDefense_stat = statsNumbers[4],
      speed = statsNames[5],
      speed_stat = statsNumbers[5],
      stats_title = 'Stats'

    return {
      abilities,
      types,
      species,
      expBase,
      name,
      height,
      weight,
      hp,
      hp_stat,
      attack,
      attack_stat,
      defense,
      defense_stat,
      spAttack,
      spAttack_stat,
      spDefense,
      spDefense_stat,
      speed,
      speed_stat,
      stats_title
    }
}



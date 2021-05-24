const calculateTotalSalary = (lineup) => {
  return lineup.reduce((salary, player) => {
    return salary + player.salary
  }, 0)
}

const getTeamCount = (lineup) => {
  return lineup.reduce((teamCounts, player) => {
    teamCounts[player.teamId] = teamCounts[player.teamId] === undefined ? 1 : teamCounts[player.teamId]

    return teamCounts
  }, {})
}

const getGameCount = (lineup) => {
  return lineup.reduce((gameCounts, player) => {
    gameCounts[player.gameId] = gameCounts[player.gameId] === undefined ? 1 : gameCounts[player.gameId]

    return gameCounts
  }, {})
}

const getPositionCount = (lineup) => {
  return lineup.reduce((positionCounts, player) => {
    positionCounts[player.position] = positionCounts[player.position] === undefined ? 1
      : positionCounts[player.position]

    return positionCounts
  }, {})
}

const violatesSalary = (lineup) => {
  return calculateTotalSalary(lineup) > 45000
}

const violatesTeamCount = (teamCounts) => {
  return Object.values(teamCounts).some((count) => { return count > 2 })
}

const violatesGameCount = (gameCounts) => {
  return Object.values(gameCounts).some((count) => { return count > 3 })
}

const violatesPositionCount = (positionCounts) => {
  return positionCounts['P'] !== 1 || positionCounts['C'] !== 1 ||
  positionCounts['1B'] !== 1 || positionCounts['2B'] !== 1 ||
  positionCounts['3B'] !== 1 || positionCounts['SS'] !== 1 ||
  positionCounts['OF'] !== 3
}

const validateLineup = (lineup) => {
  const teamCounts = getTeamCount(lineup)
  const gameCounts = getGameCount(lineup)
  const positionCounts = getPositionCount(lineup)

  return !violatesSalary(lineup) && !violatesTeamCount(teamCounts) &&
  !violatesGameCount(gameCounts) && !violatesPositionCount(positionCounts)
}

module.exports = validateLineup

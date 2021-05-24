const calculateTotalSalary = (lineup) => {
  return lineup.reduce((salary, player) => {
    return salary + player.salary
  }, 0)
}

const getTeamCount = (lineup) => {
  return lineup.reduce((teamCounts, player) => {
    teamCounts[player.teamId] = teamCounts[player.teamId] === undefined ? 1 : teamCounts[player.teamId]

    return teamCounts
  })
}

const violatesSalary = (lineup) => {
  return calculateTotalSalary(lineup) > 45000
}

const violatesTeamCount = (teamCounts) => {
  return Object.values(teamCounts).some((count) => { return count > 2 })
}

const validateLineup = (lineup) => {
  const teamCounts = getTeamCount(lineup)

  return !violatesSalary(lineup) && !violatesTeamCount(teamCounts)
}

module.exports = validateLineup

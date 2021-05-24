const calculateTotalSalary = (lineup) => {
  return lineup.reduce((salary, player) => {
    return salary + player.salary
  }, 0)
}

const violatesSalary = (lineup) => {
  return calculateTotalSalary(lineup) > 45000
}

const validateLineup = (lineup) => {
  return !violatesSalary(lineup)
}

module.exports = validateLineup

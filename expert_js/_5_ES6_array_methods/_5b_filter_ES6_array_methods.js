const teams = [
  {name: 'hcm', lastGame: 'Won'},
  {name: 'hn', lastGame: 'Lost'},
  {name: 'dn', lastGame: 'Won'},
];

const winningTeams = teams.filter(team => team.lastGame === 'Won');
console.log(winningTeams);
const losingTeams = teams.filter(team => team.lastGame === 'Lost');
console.log(losingTeams);

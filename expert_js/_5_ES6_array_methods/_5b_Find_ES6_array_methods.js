const teams = [
  {name: 'hcm', lastGame: 'Won'},
  {name: 'hn', lastGame: 'Lost'},
  {name: 'dn', lastGame: 'Won'},
];

console.log(teams.find(team => team.name === 'hcm'));
const teamHn = teams.find(team => team.name === 'hn');
console.log(teamHn);

console.log(teams.findIndex(team => team.name === 'hcm'));
const teamHnIndex = teams.findIndex(team => team.name === 'hn');
console.log(teamHnIndex);

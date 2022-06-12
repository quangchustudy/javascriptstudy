const teams = [
  {name: 'hcm', lastGame: 'Won'},
  {name: 'hn', lastGame: 'Lost'},
  {name: 'dn', lastGame: 'Won'},
];

const names = ['Quang', 'Thuy', 'Minh','Hieu','Hang','Quang','Thuy'];

/**
 * MAP method
 */
teams.map(team => console.log(team.name));
const mappedTeams = teams.map(team => {
  if (team.lastGame === 'Won') {
    team.score = 1;
  } else {
    team.score = 0;
  }

  return team; //checked mappedTeams on console
  //and mappedTeams === teams with score prop
})

/**
 * MAP method: fix copy obj
 * - Checkout: teams2 and mappedTeams
 */
const teams2 = [
  {name: 'hcm', lastGame: 'Won'},
  {name: 'hn', lastGame: 'Lost'},
  {name: 'dn', lastGame: 'Won'},
];

const mappedTeams2 = teams2.map(team => {
  if (team.lastGame === 'Won') {
    return {...team, score: 1}
  } else {
    return {...team, score: 0}
  }
})

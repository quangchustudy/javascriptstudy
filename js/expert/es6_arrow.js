/**
 * @overview: without arrow function
 * @bind_advance_example
 */
console.log(`Starting advance bind....`)
const loc = {
  country: 'Canada',
  city: 'Toronto',
  teams: ['Quang', 'Thuy', 'Hang'],
  getInfo: function () {
    console.log(this)
    console.log(`Current location is ${this.city}, ${this.country}`);
  },
  getTeamNamesWithThis: function () {
    console.log(this);
    this.teams.map(function (team) {
      console.log(this);
      console.log(`${team} from ${this.city}, ${this.country}`)
    }.bind(this)) //use bind to bind to correct obj
  },
  getTeamNamesWithThat: function () {
    var that = this; //use that variable to get this value cause of closure
    this.teams.map(function (team) {
      console.log(that);
      console.log(`${team} from ${that.city}, ${that.country}`)
    })
  },
  getTeamNamesWithArrow: function () {
    this.teams.map(team => {
      console.log(this)
      console.log(`${team} from ${this.city}, ${this.country}`)
    })
  }
}
loc.getInfo();
loc.getTeamNamesWithThis();
loc.getTeamNamesWithThat();
loc.getTeamNamesWithArrow();


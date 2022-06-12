/**
 * CASE 1: undefined
 * @type {{country: string, teams: string[], getInfo: loc.getInfo, city: string, getTeamNames: loc.getTeamNames}}
 */
const loc = {
  country: 'Vietnam',
  city: 'HCM',
  teams: ['hanoi','hcm','danang'],
  getInfo: function () {
    console.log(`Current loc is ${this.city}, ${this.country}`);
  },
  getTeamNames: function () {
    this.teams.map(
      function (team) {
        console.log(`${team} from ${this.city}, ${this.country}`);
      }
    )
  }
}

loc.getInfo();
loc.getTeamNames();

/**
 * CASE 2: fix with that variable
 */
const loc2 = {
  country: 'Vietnam',
  city: 'HCM',
  teams: ['hanoi','hcm','danang'],
  getInfo: function () {
    console.log(`Current loc is ${this.city}, ${this.country}`);
  },
  getTeamNames: function () {
    console.log(this);
    var that = this;
    this.teams.map(
      function (team) {
        console.log(that);
        console.log(`${team} from ${that.city}, ${that.country}`);
      }
    )
  }
}

loc2.getInfo();
loc2.getTeamNames();

/**
 * CASE 3: fix with bind
 */
const loc3 = {
  country: 'Vietnam',
  city: 'HCM',
  teams: ['hanoi','hcm','danang'],
  getInfo: function () {
    console.log(`Current loc is ${this.city}, ${this.country}`);
  },
  getTeamNames: function () {
    console.log(this);
    this.teams.map(
      function (team) {
        console.log(this);
        console.log(`${team} from ${this.city}, ${this.country}`);
      }.bind(this)
    )
  }
}

loc3.getInfo();
loc3.getTeamNames();

/**
 * CASE 4: fix with arrpw
 */
const loc4 = {
  country: 'Vietnam',
  city: 'HCM',
  teams: ['hanoi','hcm','danang'],
  getInfo: function () {
    console.log(`Current loc is ${this.city}, ${this.country}`);
  },
  getTeamNames_Arrow: function () {
    this.teams.map(team => {
      console.log(`${team} from ${this.city}, ${this.country}`);
    })
  }
}

loc4.getInfo();
loc4.getTeamNames_Arrow();

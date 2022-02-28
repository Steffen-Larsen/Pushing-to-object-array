const team = {
    _players: [
      {firstname: 'Martin', lastname: 'Odegaard', age: 21},
      {firstname: 'Tom', lastname: 'Halland', age: 24},
      {firstname: 'Steffen', lastname: 'Larsen', age: 22},
      ],
    _games: [
      {opponent: 'AGF', teampoints: 3, opponentPoints: 2},
      {opponent: 'Madrid', teampoints: 4, opponentPoints: 1},
      {opponent: 'Valencia', teampoints: 2, opponentPoints: 0},
    ],
    get players() {
      return this._players;
    },
      get games() {
      return this._games;
    },
  addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team._players);
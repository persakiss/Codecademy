const { timeEnd } = require("console");

const team = {
    _players: [
        { firstName: "Tie", lastName: "Domi", age: 32},
        { firstName: "Mats", lastName: "Sundin", age: 28},
        { firstName: "Jaromir", lastName: "Jagr", age: 29}
    ],
    _games: [
        { opponent: "Jets", teamPoints: 12, opponentPoints: 10},
        { opponent: "Kings", teamPoints: 8, opponentPoints: 3},
        { opponent: "Blackhawks", teamPoints: 3, opponentPoints: 5}
    ],

    get players() {
        return(this._players);
    },

    get games() {
        return(this._games);
    },

    addPlayer: function(firstNameArg, lastNameArg, ageArg) {
        this._players.push({firstName: firstNameArg, lastName: lastNameArg, age: ageArg})
    },

    newOpponent: function(opponentArg, teamPointsArg, opponentPointsArg) {
        this._games.push({opponent: opponentArg, teamPoints: teamPointsArg, opponentPoints: opponentPointsArg})
    }
}

team.addPlayer("Bugs", "Bunny", 76);
team.newOpponent("Titans", 10, 9);

console.log(team.players);
console.log(team.games);
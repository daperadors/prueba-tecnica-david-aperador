const players = [{
    name: 'Leonel',
    lastname: 'Messi',
    goals: 10,
}, {
    name: 'Cristiano',
    lastname: 'Ronaldo',
    goals: 12,
}, {
    name: 'Angel',
    lastname: 'Di Maria',
    goals: 6,
}];

console.log("players", players);

const playersFormatted = players.map(player => {
    return {
        fullname: `${player.name} ${player.lastname}`,
        goals: player.goals,
    };
}).sort((a, b) => b.goals - a.goals);


console.log("playersFormatted", playersFormatted);

const game = {
team1: 'Bayern Munich', team2: 'Borrussia Dortmund', players: [
[
'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
], [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
], ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
}, };

// Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
const playerNames = game.scored;
for (const player of playerNames.entries()) {
  console.log(`Goal ${player[0]+1}: ${player[1]}`)
}



// Use a loop to calculate the average odd and log it to the console
let sum = 0;
let values = Object.values(game.odds)
for (const data of values) {
    sum += data;
}
let average = sum / values.length;
console.log(average);

console.log(`=========`);

// Print the 3 odds to the console, but in a nice formatted way
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
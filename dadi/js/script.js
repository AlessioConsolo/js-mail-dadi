const Player = Math.floor(Math.random() * 6) + 1;
const Computer = Math.floor(Math.random() * 6) + 1;

console.log("Il punteggio del giocatore è: " + Player);
console.log("Il punteggio del computer è: " + Computer);

if (Player > Computer) {
  console.log("Il giocatore ha vinto.");
} else if (Computer > Player) {
  console.log("Il computer ha vinto.");
} else {
  console.log("Pareggio.");
}

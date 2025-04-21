

var playField = [];
for (var i = 0; i < 9; i++) {
    playField[i] = "[]";
    for (var y = 0; y < 8; y++) {
        playField[i][y] = "[]";
    }
}

console.log(playField);

let player1 = [];
let player2 = [];

while (player1.length < 3 || player2.length < 3) {
    let userInput = prompt("Möchtest du mit dem Spiel beginnen? (y)es / (n)o")
    if (userInput === "n") return;
    console.log(feld);
    userInput = prompt("[] [] [] /r/n []")
}

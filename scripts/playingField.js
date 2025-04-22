//functions

/**
 * Handles player selection and updates game state.
 * @param {Event} event - Click event from player token.
 */
function handleClickChoosePlayer(event) {
  let elementId = event.target.id;
  if (selectedPlayers.includes(elementId)) {
    alert('Dieser Spieler wurde bereits ausgewählt. Bitte wählen eine andere Spielfigur aus.');
    return;
  }
  if (player1Element === "") {
    player1Element = elementId;
    selectedPlayers.push(elementId);
    console.log(`Player 1 ausgewählt: ${player1Element}`);
    textYourPlayers.insertAdjacentHTML("beforeend", "Player 1: " + player1Element);
  } else if (player2Element === "") {
    player2Element = elementId;
    selectedPlayers.push(elementId);
    console.log(`Player 2 ausgewählt: ${player2Element}`);
    textYourPlayers.insertAdjacentHTML("beforeend", "  <br>Player 2: " + player2Element);
    setTimeout(() => {
      alert("Es wurden zwei Spieler ausgewählt, du kannst nun spielen. Viel Spaß!");
    }, 1000);
    reset.style.display = "block";

  } else {
    alert('Es wurden schon zwei Spieler ausgewählt, du kannst nun spielen.');
    console.log("Bereits zwei Spieler ausgewählt.");
  }
}
function handleClickReset(reset) {
  if (!reset) console.error("Reset button not found!");
  reset.addEventListener("click", () => {
    selectedPlayers = [];
    player1Element = "";
    player2Element = "";
    textYourPlayers.innerHTML = "";
    reset.style.display = "none";
  })
}

function gameplay(playGround) {
  Array.from(playGround.elements).forEach(element => {
    if (element.tagName != "BUTTON") return;
    element.addEventListener("click", (event) => {
      event.preventDefault();
      console.log("Klick von Taste:" + element.id)
    });
  });
}

//DOM elements
const startButton = document.getElementById("start-button");
const choosePlayer = document.getElementById("choosePlayer");
const frame = document.getElementById("frame");
const playFieldCell = document.getElementById("playFieldCell");
const titleChoosePlayer = document.getElementById("titleChoosePlayer");
const reset = document.getElementById("reset");
const textYourPlayers = document.getElementById("textYourPlayers");
const playGround = document.getElementById("playGround");
// show Game Setup
startButton.addEventListener("click", () => {
  frame.style.display = "block";
  playFieldCell.style.display = "block";
  startButton.style.display = "none";
  choosePlayer.style.display = "flex";
  titleChoosePlayer.style.display = "block";
})

//handle player selection
let player1Element = "";
let player2Element = "";
let selectedPlayers = [];
const players = document.querySelectorAll('.choosePlayer');
players.forEach(element => {
  element.addEventListener('click', handleClickChoosePlayer);
});

handleClickReset(reset);

gameplay(playGround);



/*
1. Spielfeld aufrufen über Button Play --> Spielfeld erscheint und rechts können Spieler ausgewählt werden
  - eventListener für den Play Button, um dann Spielfeld zu zeigen
  - eventListener für clicken auf die Spieler rechts (speicherung der ausgewählten Charaktere)
  - und eventListener für das Spielfeld
  - wichtig Logik muss zusammen sein, erst wenn Spieler ausgewählt kann Reaktion auf Spielfeld erfolgen
  - dann beachten, immer abwechselnd klicken - switch case
  - Arbeiten mit pop up Fenstern? für Benachrichtigung Spielerwechsel



  offene To dos:
  - Errorhandling
  - refacotring? , comments
  - weiteres auslagern in Funktionen
  - css, html lesbarer gestalten, überarbeiten
  
*/


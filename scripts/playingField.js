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
    document.querySelectorAll('.playButtons').forEach(button => {
      button.classList.add('hoverActive');
    });
    resetButton.style.display = "block";

    //start game
    gameplay(playGround, player1Element, player2Element);

  } else {
    alert('Es wurden schon zwei Spieler ausgewählt, du kannst nun spielen.');
    console.log("Bereits zwei Spieler ausgewählt.");
  }
}
/**
 * Handles click event of the reset button after players have been selected
 */
function handleClickReset(resetButton) {
  resetButton.addEventListener("click", () => {
    selectedPlayers = [];
    player1Element = "";
    player2Element = "";
    textYourPlayers.innerHTML = "";
    resetButton.style.display = "none";
    document.querySelectorAll('.playButtons').forEach(button => {
      button.innerHTML = "";
      button.disabled = false;
      button.classList.remove('hoverActive');
    });
  })
}
/**
 * Handles gamePlay after players have been selected
 */
function gameplay(playGround, player1Element, player2Element) {
  let currentPlayer = player1Element;
  Array.from(playGround.elements).forEach(element => {
    if (element.tagName != "BUTTON") return;
    element.addEventListener("click", (event) => {
      event.preventDefault();
      if (element.disabled) return;
      const currentPlayerImg = document.getElementById(currentPlayer);
      if (!currentPlayerImg) {
        console.error("Fehler: Bild für Spieler nicht gefunden:", currentPlayer);
        return;
      }
      const currentImgSrc = currentPlayerImg.src;
      const img = document.createElement("img");
      img.src = currentImgSrc;
      img.alt = currentPlayer;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";

      element.appendChild(img);
      element.disabled = true;
      element.classList.remove("hoverActive");

      // Change players
      currentPlayer = currentPlayer === player1Element ? player2Element : player1Element;
    });
  });
}

//DOM elements
const startButton = document.getElementById("start-button");
const choosePlayer = document.getElementById("choosePlayer");
const frame = document.getElementById("frame");
const playFieldCell = document.getElementById("playFieldCell");
const titleChoosePlayer = document.getElementById("titleChoosePlayer");
const resetButton = document.getElementById("resetButton");
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

handleClickReset(resetButton);





/*
1. Spielfeld aufrufen über Button Play --> Spielfeld erscheint und rechts können Spieler ausgewählt werden
  - eventListener für den Play Button, um dann Spielfeld zu zeigen
  - eventListener für clicken auf die Spieler rechts (speicherung der ausgewählten Charaktere)
  - und eventListener für das Spielfeld
  - wichtig Logik muss zusammen sein, erst wenn Spieler ausgewählt kann Reaktion auf Spielfeld erfolgen
  - dann beachten, immer abwechselnd klicken - switch case
  - Arbeiten mit pop up Fenstern? für Benachrichtigung Spielerwechsel
  - optional oben anzeigen, welcher Spieler gerade am Zug ist


  weitere Ideen:
  - Möglichkeit eigene Bilder als Spielfiguren einzufügen --> Beachtung bildegröße und speicherung
  - anzeigen alter Spielstände in Tabellenform



  offene To dos:
  - Errorhandling (einblenden der Bilder)
  - refactoring? , comments
  - weiteres auslagern in Funktionen
  - css, html lesbarer gestalten, überarbeiten
  - andere notifications
  - Spiellogik 

  
*/


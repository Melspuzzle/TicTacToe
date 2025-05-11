import { GameState } from './gameState.js';
import {
    handleClickChoosePlayer,
    gameplay,
    resetGameUI
} from './gameLogic.js';

// DOM elements
const startButton = document.getElementById("start-button");
const choosePlayer = document.getElementById("choosePlayer");
const resetButton = document.getElementById("resetButton");
const textYourPlayers = document.getElementById("textYourPlayers");
const playGround = document.getElementById("playGround");
const players = document.querySelectorAll(".playerToken");
const playButtons = document.querySelectorAll(".playButtons");
const notification = document.getElementById("notification");
const notificationText = document.getElementById("notificationText");

// show playground
startButton.addEventListener("click", () => {
    frame.style.display = "block";
    playFieldCell.style.display = "block";
    startButton.style.display = "none";
    choosePlayer.style.display = "flex";
    titleChoosePlayer.style.display = "block";
});

// player selection and updates game state
players.forEach(element => {
    element.addEventListener("click", (event) => {
        handleClickChoosePlayer(event, updateUI, startGame);
    });
});

//close notification by user
document.getElementById("closeNotification").addEventListener("click", () => {
    const notification = document.getElementById("notification");
    notification.classList.remove("show");
    notification.classList.add("hide");
});

// Handles gamePlay after players have been selected
function startGame() {
    gameplay(playGround); // start game
    playButtons.forEach(button => button.classList.add("hoverActive"));
    resetButton.style.display = "block";
}


function updateUI(playerNum, elementId) {
    if (playerNum === 1) {
        textYourPlayers.insertAdjacentHTML("beforeend", "Player 1: " + elementId);
    } else {
        textYourPlayers.insertAdjacentHTML("beforeend", "<br>Player 2: " + elementId);
    }
}


resetButton.addEventListener("click", () => {
    GameState.reset();
    resetGameUI(playButtons, textYourPlayers, resetButton);
});

export function showNotification(message) {
    notification.classList.remove("show");
    notification.classList.add("hide");

    notificationText.textContent = message;

    setTimeout(() => {
        notification.classList.remove("hide");
        notification.classList.add("show");
    }, 10);

    setTimeout(() => {
        notification.classList.remove("show");
        notification.classList.add("hide");
    }, 3000);
}

//doofe lösung mit hide show mehrmals, damit es richtig greift

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
    element.addEventListener("click", (e) => {
        handleClickChoosePlayer(e, updateUI, startGame);
    });
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
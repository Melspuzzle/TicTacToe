import { GameState } from './gameState.js';
import { showNotification } from './main.js';

export function handleClickChoosePlayer(event, updateUI, startGame) {
    const elementId = event.target.id;

    if (GameState.selectedPlayers.includes(elementId)) {
        showNotification("Dieser Spieler wurde bereits ausgewählt.");
        return;
    }

    if (GameState.player1Element === "") {
        GameState.player1Element = elementId;
        GameState.selectedPlayers.push(elementId);
        updateUI(1, elementId);
    }
    else if (GameState.player2Element === "") {
        GameState.player2Element = elementId;
        GameState.selectedPlayers.push(elementId);
        updateUI(2, elementId);
        showNotification("Zwei Spieler wurden ausgewählt, du kannst nun spielen!");
        GameState.gameActive = true;
        document.querySelectorAll('.playerToken').forEach(img => {
            img.classList.remove('hoverActive');
        });
        startGame();
    }
}

export function gameplay(playGround) {
    let currentPlayer = GameState.player1Element;

    Array.from(playGround.elements).forEach(element => {
        if (element.tagName !== "BUTTON") return;
        element.addEventListener("click", (event) => {
            event.preventDefault();
            if (!GameState.gameActive || element.disabled) return;

            const currentPlayerImg = document.getElementById(currentPlayer);
            if (!currentPlayerImg) return;


            //show images as players in playing field cells
            const img = document.createElement("img");
            img.src = currentPlayerImg.src;
            img.alt = currentPlayer;
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.objectFit = "cover";

            element.appendChild(img);
            element.disabled = true;
            element.classList.remove("hoverActive");

            //save selected position of the player
            const index = parseInt(element.id);
            GameState.board[index] = currentPlayer;

            const winner = checkWinner();
            if (winner) {
                showNotification("Spieler " + winner + " hat gewonnen!");
                GameState.gameActive = false;
                return;
            }
            //handle order of play
            if (currentPlayer === GameState.player1Element) {
                currentPlayer = GameState.player2Element;
            } else {
                currentPlayer = GameState.player1Element;
            }
        });
    });
}

function checkWinner() {
    for (let combination of GameState.winningCombinations) {
        const [a, b, c] = combination;

        if (
            GameState.board[a] &&
            GameState.board[a] === GameState.board[b] &&
            GameState.board[a] === GameState.board[c]
        ) {
            return GameState.board[a];
        }
    }
    return null;
}

export function resetGameUI(playButtons, textYourPlayers, resetButton) {
    playButtons.forEach(button => {
        button.innerHTML = "";
        button.disabled = false;
        button.classList.remove("hoverActive");
    });
    document.querySelectorAll('.playerToken').forEach(img => {
        img.classList.add('hoverActive');
    });
    textYourPlayers.innerHTML = "";
    resetButton.style.display = "none";
}
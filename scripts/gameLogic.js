import { GameState } from './gameState.js';

export function handleClickChoosePlayer(event, updateUI, startGame) {
    const elementId = event.target.id;

    if (GameState.selectedPlayers.includes(elementId)) {
        alert("Dieser Spieler wurde bereits ausgewählt.");
        return;
    }

    if (GameState.player1Element === "") {
        GameState.player1Element = elementId;
        GameState.selectedPlayers.push(elementId);
        updateUI(1, elementId);
    } else if (GameState.player2Element === "") {
        GameState.player2Element = elementId;
        GameState.selectedPlayers.push(elementId);
        updateUI(2, elementId);
        alert("Zwei Spieler wurden ausgewählt, du kannst nun spielen!");
        GameState.gameActive = true;
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

            const img = document.createElement("img");
            img.src = currentPlayerImg.src;
            img.alt = currentPlayer;
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.objectFit = "cover";

            element.appendChild(img);
            element.disabled = true;
            element.classList.remove("hoverActive");

            if (currentPlayer === GameState.player1Element) {
                currentPlayer = GameState.player2Element;
            } else {
                currentPlayer = GameState.player1Element;
            }
        });
    });
}

export function resetGameUI(playButtons, textYourPlayers, resetButton) {
    playButtons.forEach(button => {
        button.innerHTML = "";
        button.disabled = false;
        button.classList.remove("hoverActive");
    });
    textYourPlayers.innerHTML = "";
    resetButton.style.display = "none";
}
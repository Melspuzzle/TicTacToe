//Singleton 

export const GameState = {
    player1Element: "",
    player2Element: "",
    selectedPlayers: [],
    gameActive: false,
    board: Array(9).fill(null),
    winningCombinations: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],

    reset() {
        this.player1Element = "";
        this.player2Element = "";
        this.selectedPlayers = [];
        this.gameActive = false;
        this.board = Array(9).fill(null);
    }
};

/* To do
Erweiterung um Gewinner/ Verlierer
*/
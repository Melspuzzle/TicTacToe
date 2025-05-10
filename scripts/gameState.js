//Singleton 

export const GameState = {
    player1Element: "",
    player2Element: "",
    selectedPlayers: [],
    gameActive: false,

    reset() {
        this.player1Element = "";
        this.player2Element = "";
        this.selectedPlayers = [];
        this.gameActive = false;
    }
};

/* To do
Erweiterung um Gewinner/ Verlierer
*/
# main game structure
#terminal based game

def chooseCharacter():
    selection=""
    while(selection is not "X" and "O"):
        # Prompt the user to enter their selection 
        selection = input('Which character do you want to play? X or 0?\n')
        # If the user is too stupid
        if selection is not "X" and "O":
            print("Please type X or 0 in, other characters are not playable.")
    return selection

def gameTicTacToe():
    #####gameStart#####
    print("Let's play Tic Tac Toe!")
    # Player 1 select character
    playerOne = chooseCharacter() #function call - line 4 
    print("Great you chose " +playerOne+"! Let's start playing.")
    # assignment player 2
    playerTwo=""  
    if playerOne is "X":
        playerTwo = "0"
    else :
        playerTwo = "X"

    print("[][][]\n[][][]\n[][][]\n")

    print("The winner is    !")

def funcPlayAgain():
    playAgain = input("Type Y in if you want to play again or N for stop the game.\n")
    if playAgain is "Y":
        gameTicTacToe()
    elif playAgain is "N":
        print("Goodbye!")
    else : 
        funcPlayAgain()

#function call   
gameTicTacToe()
funcPlayAgain()

""" 
Notes: 
Positionen feststellen auf dem Spielfeld

[][][]
[][][]
[][][]

Reihendarstellung als 3 Variablen pro Reihe und dann nochmal das einzelne Feld abfragen 
oder Spielfeld als Objekt mit verschiedenen Properties festlegen
Spielfeld kann als String mit linebreak dargestellt werden 
Spielfeld kann auch als Array gespeichert werden, um die Positionen festzuhalten

wie vermeide ich zu lange if else Konditionen, um die gewählten Positionen aufzunehmen? - Arbeit mit switch case?

soll das Spiel gegen den PC gespielt werden, heißt Reaktion des Computers ist vorprogrammiert 
oder spielen zwei Spieler am gleichen PC gegeneinander?

was mache ich bei weiterführenden Spielrunden? - komplettes Spiel in einer abrufbaren Funktion schreiben
"""
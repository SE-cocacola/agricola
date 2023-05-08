class GameManager{
    constructor(playerCount){
        this.players = [];
        for (let i = 0; i < playerCount; i++) {
            this.players.push(new Player());
        }

        this.currentPhase = 1;
        this.currentRound = 1;
    }

    actionRound() {

    }

    doNextTurn() {

    }

    harvest() {
        
    }
}
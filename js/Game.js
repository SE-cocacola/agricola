import GameManager from './GameManager.js'

class Game {
    constructor (playerCount) {
        this.playerCount = playerCount
    }

    startGame() {
        const gameManager = new GameManager(this.playerCount);
    }

    endGame() {
        
    }
}
import PlayerManager from './PlayerManager.js'

class Player {
    constructor(name) {
        this.name = name;
        this.checkTurn = false;
        this.leftTurn = 0;
        this.score = 0;
        this.playerManger = new PlayerManager();
    }
}
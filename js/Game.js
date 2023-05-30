import GameManager from './GameManager.js'
import UIManager from './UIManager.js';
import UIInterface from './UIInterface.js';

class Game {
    constructor () {

        // 자원 초기화, 주요설비카드 초기화
        this.gameManager = new GameManager();
        // this.currentPhase = 1;
        // this.currentRound = 1;

        this.uiManager = new UIManager();

    }

    start() {
        // 선 정하기
        const randomInt = Math.floor(Math.random() * 2);

        const firstPlayer = randomInt === 0 ? this.gameManager.player1 : this.gameManager.player2;
        if (firstPlayer === this.gameManager.player1){
            console.log("player1");
            this.uiManager.selectOrder(1);
            this.gameManager.player1.resourceManager.initialize(true)
            this.gameManager.player2.resourceManager.initialize(false)
            
        }else{
            console.log("player2");
            this.uiManager.selectOrder(0);
            this.gameManager.player2.resourceManager.initialize(true)
            this.gameManager.player1.resourceManager.initialize(false)
        }
        // UIManager.selectOrder(firstPlayer);

        this.gameManager.setFirstPlayer(firstPlayer);

        // 선 정한 뒤 Manager에 반영

        // 반복문 돌면서 라운드 진행
        for (let round=1; round<=8; round++) {
            this.gameManager.actionRound();
            if (round===4 || round===8) {
                this.gameManager.harvest();
            }
        }

        // // 게임 종료
        // this.end();   
    }

    end() {
        // 점수 이긴 사람 보여주기
        this.gameManager.showWinner();
    }
}

export default Game;
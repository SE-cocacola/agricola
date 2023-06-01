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

    async start() {
        // 선 정하기
        const randomInt = Math.floor(Math.random() * 2);

        const firstPlayer = randomInt === 0 ? this.gameManager.player1 : this.gameManager.player2;
        if (firstPlayer === this.gameManager.player1){
            this.uiManager.selectOrder(1);
            this.gameManager.player1.resourceManager.initialize(true)
            this.gameManager.player2.resourceManager.initialize(false)
            
        }else{
            this.uiManager.selectOrder(0);
            this.gameManager.player2.resourceManager.initialize(true)
            this.gameManager.player1.resourceManager.initialize(false)
        }
        
        // 선 정한 뒤 Manager에 반영
        this.gameManager.setFirstPlayer(firstPlayer);

        // 반복문 돌면서 라운드 진행
        for (let round = 1; round <= 7; round++) {
            // round card open
            this.uiManager.changeActionRoundImage(round);
            await this.gameManager.actionRound(this.uiManager);
            
            //this.gameManager.actionRound(this.uiManager);
            if (round===4 || round===7) {
                this.gameManager.harvest();
            }
            this.uiManager.removeImages("action_board", './image/resource/farmer');
            
            // 농부의 집을 어떻게 파악? 수는 getAdultFarmer
            this.uiManager.showFarmer("board6", "Red");
            this.uiManager.showFarmer("board11", "Red");

            this.uiManager.showFarmer("board21", "Blue");
            this.uiManager.showFarmer("board26", "Blue");
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
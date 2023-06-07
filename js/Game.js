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
        // 선 정하고 resourceManager 초기화
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

        // Util판 resource 업데이트
        this.uiManager.showResource(this.gameManager);

        // 반복문 돌면서 라운드 진행
        for (let round = 1; round <= 7; round++) {
            // round card open
            this.uiManager.changeActionRoundImage(round);
            await this.gameManager.actionRound(this.uiManager, round);
            
            //this.gameManager.actionRound(this.uiManager);
            // if (round===4 || round===7) {
            //     this.gameManager.harvest();
            // }
            this.uiManager.removeImages("action_board", './image/resource/farmer');

            // 돌아갈 때 농부의 집 파악해서 그 집에 아래 코드 실행 해야함
            this.uiManager.showFarmer("board6", "Red");
            this.uiManager.showFarmer("board11", "Red");

            this.uiManager.showFarmer("board21", "Blue");
            this.uiManager.showFarmer("board26", "Blue");

            // 라운드가 끝날 때 각 보드판의 누적 자원칸이 activative가 아닐 경우 자원 증가시키는 코드 추가
            let actionBoard = this.gameManager.actionSpace;
            let roundBoard = this.gameManager.roundSpace;

            // ExpandFarm, AccumulateFood, GrainSeed, FarmLand, Lesson, DayLaborer, Forest, ClayPit, ReedBank, Fishing
            for(let i=0; i<10; i++){
                if(i === 1 || i === 6 || i === 7 || i === 8 || i === 9){
                    if(!actionBoard[i].isActivate){
                        actionBoard[i].increaseCnt();
                    }else{
                        actionBoard[i].cnt = actionBoard[i].default;
                    }
                }
                actionBoard[i].setDeactivate();
            }

            // BuildMajorFacility, BuildFence, GrainUtilization, AccumulateSheep, IncreaseFamily, UpgradeHouse, AccumulateStone
            for(let i=0; i<round; i++){
                if(i === 3|| i === 6){
                    if(!roundBoard[i].isActivate){
                        roundBoard[i].increaseCnt();
                    }else{
                        roundBoard[i].cnt = roundBoard[i].default;
                    }
                }
                roundBoard[i].setDeactivate();
            }

            // 라운드 끝날때마다 플레이어의 자원 확인(누적값 확인)
            // console.log(this.gameManager.player1.resourceManager);
            // console.log(this.gameManager.player2.resourceManager);
            // console.log(this.gameManager.player1.tileManager.playerBoard);
            // console.log(this.gameManager.player2.tileManager.playerBoard);
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
import GameManager from './GameManager.js'

class Game {
    constructor (playerCount) {
        this.playerCount = playerCount;

        // 자원 초기화, 주요설비카드 초기화
        const gameManager = new GameManager(this.playerCount);
        // this.currentPhase = 1;
        // this.currentRound = 1;
    }

    start() {
        //선 정하기

        // 반복문 돌면서 라운드 진행
        for (let round=1; round<=8; round++) {
            if (round===4 || round===8) {
                this.gameManager.harvest();
            }
            this.gameManager.actionRound(i);
        }

        // 게임 종료
        this.end();   
    }

    end() {
        // 점수 이긴 사람 보여주기
        this.gameManager.showWinner();
    }
}
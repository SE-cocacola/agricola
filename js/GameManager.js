import { UIManager } from "./UIManager";
import Player from "./Player";
import { PM } from "./PlayerManager";

class GameManager{
    constructor(){
        this.player1 = new Player();
        this.player2 = new Player();
    }

    setFirstPlayer(firstPlayer) {
        this.firstPlayer = firstPlayer;
    }

    actionRound(round) {
        let turns = [];
        const player1Farmers = this.player1.getAdultFarmer();
        const player2Farmers = this.player2.getAdultFarmer();
        

        // 먼저 firstPlayer가 player2인 경우부터 생각해 봅시다.
        let currentPlayer = this.firstPlayer;
        let array = [];

        // player1과 player2의 farmer 수에 따라 번갈아가며 array에 추가합니다.
        for (let i = 0; i < player1Farmers + player2Farmers; i++) {
            array.push(currentPlayer);
            if (currentPlayer === player2) {
                currentPlayer = player1;
            } else {
                currentPlayer = player2;
            }
        }
        
        // turn을 돌아가면서 player가 행동을 함.
        array.forEach(player => {
            player.moveFarmer();
            
        });
    }


    harvest() {
        
    }

    // 플레이어 점수 가져와서 이긴 사람 보여주기
    showWinner() {
        let winner = this.player1.score > this.player2.score ? this.player1 : this.player2;
        UIManager.showWinner(winner);
        return winner;
    }
}

export default GameManager;
class GameManager{
    constructor(playerCount){
        this.players = [];
        for (let i = 0; i < playerCount; i++) {
            this.players.push(new Player());
        }

    }

    actionRound(round) {
        let first = player1;
        let array = [player1, player2, player1, player2, player2, player2];
        let farmers = [];
        this.players.forEach(element => {
             // 성인 파머 수
            farmers.append(element.getFarmer());
        });

        player1.playerManager.getFarmer
        // [2, 4, 6]

        // player turn
    }

    doNextTurn() {

    }

    harvest() {
        
    }

    // 플레이어 점수 가져와서 이긴 사람 보여주기
    showWinner() {
        // 반복문 돌면서 플레이어 점수를 가져와
        // let winner = player();
        // players.forEach(element => {
        //     winner = element.getScore() > winner.getScore() ? player : winner; 
        // });
        // Ui
    }
}

export default GameManager;
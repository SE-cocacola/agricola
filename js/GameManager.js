import UIManager from "./UIManager.js";
import Player from "./Player.js";
import MajorCardManager from "./MajorCard/MajorCardManager.js";
import HarvestManager from "./HarvestManager.js";
import { ExpandFarm, AccumulateFood, GrainSeed, FarmLand, Lesson, DayLaborer, Forest, ClayPit, ReedBank, Fishing } from "./Board/ActionSpace.js";
import { BuildMajorFacility, BuildFence, GrainUtilization, AccumulateSheep, IncreaseFamily, UpgradeHouse, AccumulateStone } from "./Board/RoundSpace.js";

class GameManager {
    constructor() {
        this.player1 = new Player("0");
        this.player2 = new Player("1");
        this.majorCardManager = new MajorCardManager();
        // 10개 기본 행동칸 순서대로
        this.actionSpace = [new ExpandFarm(), new AccumulateFood(), new GrainSeed(), new FarmLand(), new Lesson(),
            new DayLaborer(), new Forest(), new ClayPit(), new ReedBank(), new Fishing()
        ];
        // 7개 라운드 행동칸 순서대로
        this.roundSpace = [new BuildMajorFacility(), new BuildFence(), new GrainUtilization(), new AccumulateSheep(),
            new IncreaseFamily(), new UpgradeHouse(), new AccumulateStone()
        ];
    }

    setFirstPlayer(firstPlayer) {
        this.firstPlayer = firstPlayer;
    }

    async actionRound(uiManager, round) {
        let turns = [];
        const player1Farmers = this.player1.getAdultFarmer();
        const player2Farmers = this.player2.getAdultFarmer();

        // 먼저 firstPlayer가 player2인 경우부터 생각해 봅시다.
        let currentPlayer = this.firstPlayer;

        // player1과 player2의 farmer 수에 따라 번갈아가며 turns에 추가합니다.
        for (let i = 0; i < player1Farmers + player2Farmers; i++) {
            turns.push(currentPlayer);
            if (currentPlayer === this.player2) {
                currentPlayer = this.player1;
            } else {
                currentPlayer = this.player2;
            }
        }

        // turn을 돌아가면서 player가 행동을 함.
        for (const player of turns) {
            uiManager.showResource(this, round);
            await player.moveFarmer(uiManager, this.majorCardManager, this.actionSpace, this.roundSpace, round);
            uiManager.switchTurns(player);
            uiManager.showPlayerResource(this);
            
        }
    }

    harvest(uiManager) {
        // 이게 맞는지 모르겠음
        const harvestManager = new HarvestManager();
        const player1ChildPosition = harvestManager.doHarvest(this.player1);
        const player2ChildPosition = harvestManager.doHarvest(this.player2);
        uiManager.showResource(this);
        uiManager.changeChildToAdult(player1ChildPosition, player2ChildPosition);
    }

    // 플레이어 점수 가져와서 이긴 사람 보여주기
    showWinner(uiManager) {
        let winner = this.player1.score > this.player2.score ? this.player1 : this.player2;
        uiManager.showWinner(winner, this.player1, this.player2);
        return winner;
    }

    addMajorCardPlayer1 = () => {
        let brazier1 = this.MajorCardManager.popMajorCard();
        this.player1.resourceManager.addMajorCard(brazier1);
    };
}

export default GameManager;
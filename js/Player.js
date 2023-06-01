import ResourceManager from './Resource/ResourceManager.js'
import TileManager from './Tile/TileManager.js';
import { RT } from './Resource/ResourceType.js';

class Player {
    constructor(name) {
        this.name = name; // 나중에 없애
        this.leftTurn = 0;
        this.score = 0;
        this.resourceManager = new ResourceManager();
        this.tileManager = new TileManager();
    }

    getAdultFarmer() {
        return this.resourceManager.resources[14].amount;
    }

    calculateScore() {
        const resources = this.resourceManager.resources;
        const tiles = this.tileManager.playerBoard;
        let playrScore = 0;

        // GRAIN
        if (resources[4].amount === 0) {
            playrScore -= 1;
        } else if (1 <= resources[4].amount && resources[4].amount <= 3) {
            playrScore += 1;
        } else if (4 <= resources[4].amount && resources[4].amount <= 5) {
            playrScore += 2;
        } else if (6 <= resources[4].amount && resources[4].amount <= 7) {
            playrScore += 3;
        } else {
            playrScore += 4;
        }

        // VEGETABLE
        if (resources[5].amount === 0) {
            playrScore -= 1;
        } else if (1 === resources[5].amount) {
            playrScore += 1;
        } else if (2 === resources[5].amount) {
            playrScore += 2;
        } else if (3 === resources[5].amount) {
            playrScore += 3;
        } else {
            playrScore += 4;
        }

        // SHEEP
        if (resources[7].amount === 0) {
            playrScore -= 1;
        } else if (1 <= resources[7].amount && resources[7].amount <= 3) {
            playrScore += 1;
        } else if (4 <= resources[7].amount && resources[7].amount <= 5) {
            playrScore += 2;
        } else if (6 <= resources[7].amount && resources[7].amount <= 7) {
            playrScore += 3;
        } else {
            playrScore += 4;
        }

        // BOAR
        if (resources[8].amount === 0) {
            playrScore -= 1;
        } else if (1 <= resources[8].amount && resources[8].amount <= 2) {
            playrScore += 1;
        } else if (3 <= resources[8].amount && resources[8].amount <= 4) {
            playrScore += 2;
        } else if (5 <= resources[8].amount && resources[8].amount <= 6) {
            playrScore += 3;
        } else {
            playrScore += 4;
        }

        // CATTLE
        if (resources[9].amount === 0) {
            playrScore -= 1;
        } else if (1 === resources[9].amount) {
            playrScore += 1;
        } else if (2 <= resources[9].amount && resources[9].amount <= 3) {
            playrScore += 2;
        } else if (4 <= resources[9].amount && resources[9].amount <= 5) {
            playrScore += 3;
        } else {
            playrScore += 4;
        }

        // FARMER
        playrScore += resources[14].amount * 3;
        playrScore += resources[15].amount * 3;

        // BEGGING
        playrScore -= resources[12].amount * 3;

        // majorCard 확인, 인덱스 확인해서 점수 계산, 추가점수까지
        for(let key in resources[10]) {
            switch (resources[10][key].cardIdx) {
                case 0:
                    playrScore += 1;
                    break;
                case 1:
                    playrScore += 1;
                    break;
                case 2:
                    playrScore += 1;
                    break;
                case 3:
                    playrScore += 1;
                    break;
                case 4:
                    playrScore += 2;
                    break;
                case 5:
                    playrScore += 3;
                    break;
                case 6: // 가구
                    playrScore += 2;
                    if (3 <= resources[0].amount && resources[0].amount < 5) {
                        playrScore += 1;
                    } else if (5 <= resources[0].amount && resources[0].amount < 7) {
                        playrScore += 2;
                    } else if (7 <= resources[0].amount) {
                        playrScore += 3;
                    }
                    break;
                case 7: // 그릇
                    playrScore += 2;
                    if (3 <= resources[1].amount && resources[1].amount < 5) {
                        playrScore += 1;
                    } else if (5 <= resources[1].amount && resources[1].amount < 7) {
                        playrScore += 2;
                    } else if (7 <= resources[1].amount) {
                        playrScore += 3;
                    }
                    break;
                case 8: // 바구니
                    playrScore += 2;
                    if (3 <= resources[3].amount && resources[3].amount < 5) {
                        playrScore += 1;
                    } else if (5 <= resources[3].amount && resources[3].amount < 7) {
                        playrScore += 2;
                    } else if (7 <= resources[3].amount) {
                        playrScore += 3;
                    }
                    break;
                case 9:
                    playrScore += 4;
                    break;
                default:
                    return playrScore;
            }
        }

        return playrScore;

        // 빈 칸, 밭, 우리, 방 - tileManager 돌면서 확인, 울타리 쳐진거 판별 어떤식으로?

    }

    useMajorCard(resourceManager) {
        // TODO: Implement use major card logic
    }


    async moveFarmer(uiManager, majorCardManager, actionSpace, roundSpace) {
        // TODO: Implement move player logic
        // 타일 클릭 하면 함수 실행
        // useMajorCard
        let action_round_id;
        if (this.name === "0") {
            action_round_id = await uiManager.move("Red", 0)
        } else {
            action_round_id = await uiManager.move("Blue", 1)
        }

        switch (action_round_id) {
            case "r1":
                console.log("r1");
                let buildMajorFacility = roundSpace[0];
                await buildMajorFacility.behave(this, uiManager, majorCardManager);
                break;
            case "r2":
                console.log("r2");
                let buildFence = roundSpace[1];

                break;

            case "r3":
                console.log("r3");
                let grainUtilization = roundSpace[2];

                break;

            case "r4":
                console.log("r4");
                let accumalteSheep = roundSpace[3];
                await accumalteSheep.behave(this);
                break;

            case "r5":
                console.log("r5");
                let increaseFamily = roundSpace[4];

                break;

            case "r6":
                console.log("r6");
                let upgradeHouse = roundSpace[5];

                break;

            case "r7":
                console.log("r7");
                let accululateStone = roundSpace[6];
                await accululateStone.behave(this)
                break;

            case "a1":
                console.log("a1");
                // 농장 확장
                let expandFarm = actionSpace[0];

                break;

            case "a2":
                console.log("a2");
                // 음식 +1 누적칸
                let accululateFood = actionSpace[1];
                await accululateFood.behave(this);
                break;

            case "a3":
                console.log("a3");
                // 숲 +3 누적칸
                let forest = actionSpace[6];
                await forest.behave(this);
                break;

            case "a4":
                console.log("a4");
                // 곡식 종자 1개 (누적 X)
                let grainSeed = actionSpace[2];
                await grainSeed.behave(this);
                break;

            case "a5":
                console.log("a5");
                // 밭 한개 일구기
                let farmLand = actionSpace[3];

                break;

            case "a6":
                console.log("a6");
                // 흙 +1 누적칸
                let clayPit = actionSpace[7];
                await clayPit.behave(this);
                break;

            case "a7":
                console.log("a7");
                // 교습 -> ?
                let lesson = actionSpace[4];

                break;

            case "a8":
                console.log("a8");
                // 갈대 +1 누적칸
                let reedBank = actionSpace[8];
                await reedBank.behave(this);
                break;

            case "a9":
                console.log("a9");
                // 음식 2개 (누적 X)
                let dayLaborer = actionSpace[5];
                await dayLaborer.behave(this);
                break;
            case "a10":
                console.log("a10");
                // 음식 +1 누적칸
                let fishing = actionSpace[9];
                await fishing.behave(this);
                break;
            default:
                console.log("다른데 클릭했음");
                break;
        }

    }
}

export default Player;
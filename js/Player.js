import ResourceManager from './Resource/ResourceManager.js'
import TileManager from './Tile/TileManager.js';
import { RT } from './Resource/ResourceType.js';
import BoardInterface from './Board/BoardInterface.js';
import { BuildMajorFacility, BuildFence, GrainUtilization, AccumulateSheep, IncreaseFamily, UpgradeHouse, AccumulateStone } from "./Board/RoundSpace.js"

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
        for (let i = 0; i < resources[10].length; i++) {
            switch (resources[10].get(i).cardIdx) {
                case 0:
                    playrScore += 1;
                case 1:
                    playrScore += 1;
                case 2:
                    playrScore += 1;
                case 3:
                    playrScore += 1;
                case 4:
                    playrScore += 2;
                case 5:
                    playrScore += 3;
                case 6: // 가구
                    playrScore += 2;
                    if (3 <= resources[0].amount && resources[0].amount < 5) {
                        playrScore += 1;
                    } else if (5 <= resources[0].amount && resources[0].amount < 7) {
                        playrScore += 2;
                    } else if (7 <= resources[0].amount) {
                        playrScore += 3;
                    }
                case 7: // 그릇
                    playrScore += 2;
                    if (3 <= resources[1].amount && resources[1].amount < 5) {
                        playrScore += 1;
                    } else if (5 <= resources[1].amount && resources[1].amount < 7) {
                        playrScore += 2;
                    } else if (7 <= resources[1].amount) {
                        playrScore += 3;
                    }
                case 8: // 바구니
                    playrScore += 2;
                    if (3 <= resources[3].amount && resources[3].amount < 5) {
                        playrScore += 1;
                    } else if (5 <= resources[3].amount && resources[3].amount < 7) {
                        playrScore += 2;
                    } else if (7 <= resources[3].amount) {
                        playrScore += 3;
                    }
                case 9:
                    playrScore += 4;
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


    async moveFarmer(uiManager, majorCardManager) {
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
                const buildMajorFacility = new BuildMajorFacility();
                buildMajorFacility.behave(this, uiManager, majorCardManager);
                break;
            case "r2":
                console.log("r2");
                break;

            case "r3":
                console.log("r3");
                break;

            case "r4":
                console.log("r4");
                break;

            case "r5":
                console.log("r5");
                break;

            case "r6":
                console.log("r6");
                break;

            case "r7":
                console.log("r7");
                break;

            case "a1":
                console.log("a1");
                break;

            case "a2":
                console.log("12");
                break;

            case "a3":
                console.log("a3");
                break;

            case "a4":
                console.log("a4");
                break;

            case "a5":
                console.log("a5");
                break;

            case "a6":
                console.log("a6");
                break;

            case "a7":
                console.log("a7");
                break;

            case "a8":
            case "a9":
            case "a10":
            default:
                console.log("none");
                break;
        }

    }
}

export default Player;
import RoomType from '../Tile/RoomType.js';
import BoardInterface from '../Board/BoardInterface.js';
import MajorCardManager from '../MajorCard/MajorCardManager.js';
import UIManager from '../UIManager.js';
import Game from '../Game.js';
import { RT } from '../Resource/ResourceType.js';

class BuildMajorFacility extends BoardInterface {
    constructor() {
        super("BuildMajorFacility");
    }

    // 자원 부족하면 획득 못하게 설정해야됨
    async behave(player, uiManager, majorCardManager) {
        // uiManager를 통해 클릭하면 그 majorCard의 name 받아와서 변수에 저장
        let majorCardsName = Object.keys(majorCardManager.cards);

        // majorCard를 클릭하면 그 클릭한 id 값을 cardName 변수에 저장
        let cardName = await uiManager.majorCardPopUp(majorCardsName, true);
        let card = majorCardManager.cards[cardName];
        const needResources = card.needResource;
        needResources.forEach((needResource) => {
            player.resourceManager.removeResource(needResource.resourceType, needResource.amount);
        });

        player.resourceManager.addMajorCard(cardName);
        majorCardManager.removeMajorCard(cardName);
        
        this.setActivate();
    }
}

class BuildFence extends BoardInterface {
    constructor() {
        super("BuildFence");
        this.active = true;
    }

    async behave(player, uiManager) {
        // 울타리 치기
        // uiManager hover
        uiManager.addHoverEffectToDiv("r2");

        let target_id;

        while (player.resourceManager.resources[0].amount >= 1) {
            const row_col_bars = player.name === "0" ? document.querySelector('.farm_board0') : document.querySelector('.farm_board1');
            const confirm = document.getElementById('confirm');

            let fencePromise = new Promise((resolve) => {
                row_col_bars.addEventListener('click', function(event) {
                    if (event.target.matches('.row_bar') || event.target.matches('.col_bar')) {
                        resolve(event.target.id);
                    }
                });
                confirm.addEventListener('click', function(event) {
                    resolve(false);
                });
            });

            target_id = await fencePromise;
            if(!target_id){
                break;
            }

            // 버튼 읽어오고 가능한지 체크.
            await uiManager.addFence(player, target_id);
            player.resourceManager.resources[0].amount -= 1;

        }
        const row_col_bars = player.name === "0" ? document.querySelector('.farm_board0') : document.querySelector('.farm_board1');
        uiManager.removeAllEventListenersFromFarmBoard();
    }

    handleClick() {
        // 변수 값을 변경
        this.active = false;
        console.log(314213)
    }
}


class GrainUtilization extends BoardInterface {
    constructor() {
        super("GrainUtilization");
    }

    // 씨뿌리기
    async behave(player, uiManager) {
        //player.tileManager.fieldPostion을 돌면서 비어있는 필드 확인해야 되고
        const playerBoard = player.tileManager.playerBoard;
        const fieldPosition = player.tileManager.fieldPosition; // []
        let emptyField = [];
        for(let i=0; i<fieldPosition.length; i++){
            if(!playerBoard[fieldPosition[i]].isPlant){
                emptyField.push(fieldPosition[i]);
            }
        }
        console.log(emptyField);

        let idx = await uiManager.grainUtilization(player.name, emptyField);
        idx %= 15;
        player.resourceManager.removeResource(RT.GRAIN, 1);
        playerBoard[idx].plantCrop(RT.GRAIN);
        this.setActivate();
    }

    // 그리고,또는 빵 굽기
    bakeBread(player) {
        // major 카드가 있는지 확인하고, 어떤 카드인지도 확인해야 함.
    }
}

class AccumulateSheep extends BoardInterface {
    constructor() {
        super("AccumulateSheep");
        this.default = 1;
        this.cnt = 1;
    }

    async behave(player, uiManager) {
        // uiManager hover
        uiManager.addHoverEffectToDiv("r4");

        // 양 배치
        const boards = player.name === "0" ? document.querySelector('.farm_board0') : document.querySelector('.farm_board1');
        let sheepPromise = new Promise((resolve) => {
            boards.addEventListener('click', function(event) {
                if (event.target.nodeName === 'IMG' && event.target.parentElement.matches('.farmboard')) {
                    resolve(event.target.parentElement.id);
                }
            });
        });

        let target_id = await sheepPromise;
        await uiManager.addSheep(target_id)
        player.resourceManager.addResource(RT.SHEEP, this.cnt);
        uiManager.removeAllEventListenersFromFarmBoard();
        this.setActivate();
    }

    increaseCnt() {
        this.cnt++;
    }
}

class IncreaseFamily extends BoardInterface {
    constructor() {
        super("IncreaseFamily");
    }

    // instanceOf: 객체 비교
    async behave(player, uiManager) {
        const playerBoard = player.tileManager.playerBoard;
        const roomPosition = player.tileManager.roomPosition; // []
        let emptyRoom = [];
        for(let i=0; i<roomPosition.length; i++){
            if(playerBoard[roomPosition[i]].adult === 0 && !playerBoard[roomPosition[i]].isChild){
                emptyRoom.push(roomPosition[i]);
            }
        }
        console.log('emptyRoom: ' + emptyRoom);

        let idx = await uiManager.increaseFamily(player.name, emptyRoom);
        idx %= 15;

        playerBoard[idx].addChild();
        player.resourceManager.resources[15].amount++;
        
        this.setActivate();
    }
}

class UpgradeHouse extends BoardInterface {
    constructor() {
        super("UpgradeHouse");
    }

    async behave(player, uiManager) {
        const roomType = player.tileManager.roomType;
        const roomPosition = player.tileManager.roomPosition;
        switch (roomType) {
            case RoomType.WOOD:
                player.resourceManager.removeResource(RT.CLAY, roomPosition.length);
                player.resourceManager.removeResource(RT.REED, roomPosition.length);
                break;
            case RoomType.CLAY:
                player.resourceManager.removeResource(RT.STONE, roomPosition.length);
                player.resourceManager.removeResource(RT.REED, roomPosition.length);
                break;
            default:
                break;
        }

        await uiManager.upgradeHouse(player.name, roomType, roomPosition);
        player.tileManager.setRoomType();
        
        uiManager.removeAllEventListenersFromFarmBoard();
        this.setActivate();
    }
}

class AccumulateStone extends BoardInterface {
    constructor() {
        super("AccumulateStone");
        this.default = 1;
        this.cnt = 1;
    }

    behave(player) {
        player.resourceManager.addResource(RT.STONE, this.cnt);

        this.setActivate();
    }

    increaseCnt() {
        this.cnt++;
    }
}

export { BuildMajorFacility, BuildFence, GrainUtilization, AccumulateSheep, IncreaseFamily, UpgradeHouse, AccumulateStone };

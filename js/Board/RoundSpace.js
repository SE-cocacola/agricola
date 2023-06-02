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

    // player의 자원 감소시키고, 자원 부족하면 획득 못하게 설정해야됨
    async behave(player, uiManager, majorCardManager) {
        // uiManager를 통해 클릭하면 그 majorCard의 name 받아와서 변수에 저장
        let majorCardsName = Object.keys(majorCardManager.cards);

        // majorCard를 클릭하면 그 클릭한 id 값을 cardName 변수에 저장
        let cardName = await uiManager.majorCardPopUp(majorCardsName, true);
        
        player.resourceManager.addMajorCard(cardName);
        majorCardManager.removeMajorCard(cardName);

        this.setActivate();
    }
}

class BuildFence extends BoardInterface {
    constructor() {
        super("BuildFence");
    }

    behave(player, uiManager) {
        // 울타리 치기
        // uiManager hover
        uiManager.addHoverEffectToDiv("r2");

        while(player.resourceManager.resources[0].amount >= 1 && ){ // 어떤 버튼을 클릭했을 때 종료.
            // 버튼 읽어오고 가능한지 체크.
            if(/* 제약 조건 */){
                // 클릭한 board_id 읽어오고
                uiManager.addFence(player, "board_id");
            }else{
                break;
            }
            //삭제는 어떻게 처리하지? 삭제하고싶으면?
            
        }
        uiManager.removeAllEventListenersFromFarmBoard();
        this.setActivate();
    }
}

class GrainUtilization extends BoardInterface {
    constructor() {
        super("GrainUtilization");
    }

    // 씨뿌리기
    behave(player, idx, crop) {
        //player.tileManager.fieldPostion을 돌면서 비어있는 필드 확인해야 되고
        // 클릭한 필드에 ......
        if (idx == Field && Field.isPlant === false) {
            Field.plantCrop(crop);
        };

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

    behave(player, uiManager) {
        // uiManager에서 어디를 선택할 수 있는지.
        uiManager.addHoverEffectToDiv("r4");
        if(/* 제약조건 */){
            player.resourceManager.addResource(RT.SHEEP, this.cnt);
        }else{
            return;
        }
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
    behave(player, idx) {
        if (type(player.tileManager.playerBoard[idx]) instanceof Room) {
            if (player.tileManager.playerBoard[idx].isEmpty) {
                player.tileManager.playerBoard[idx].isChild = true;
            }
        }

        this.setActivate();
    }
}

class UpgradeHouse extends BoardInterface {
    constructor() {
        super("UpgradeHouse");
    }

    behave(player, uiManager) {
        uiManager.addHoverEffectToDiv("r6");

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

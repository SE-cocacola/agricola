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

    behave(player) {
        // 울타리 치기

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

    behave(player) {
        player.ResourceManager.addResource(RT.SHEEP, this.cnt);

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

    behave(player) {
        player.tileManager.setRoomType();

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
        player.ResourceManager.addResource(RT.STONE, this.cnt);

        this.setActivate();
    }

    increaseCnt() {
        this.cnt++;
    }
}

export { BuildMajorFacility, BuildFence, GrainUtilization, AccumulateSheep, IncreaseFamily, UpgradeHouse, AccumulateStone };
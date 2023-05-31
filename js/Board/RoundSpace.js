import RoomType from '../Tile/RoomType.js';
import BoardInterface from './BoardInterface.js'

class BuildMajorFacility extends BoardInterface {
    constructor() {
        super("BuildMajorFacility");
    }

    behave(player, uiManager) {
        uiManager.openPop(Object.keys(game.gameManager.MajorCardManager.cards))
        player.resourceManager.addMajorCard(cardIdx);
        MajorCardManager.removeMajorCard(cardIdx);
    }
}

class BuildFence extends BoardInterface {
    constructor() {
        super("BuildFence");
    }

    behave(player) {
        // 울타리 치기
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
    }

    // 그리고,또는 빵 굽기
    bakeBread(player) {
        // major 카드가 있는지 확인하고, 어떤 카드인지도 확인해야 함.
    }
}

class AccumulateSheep extends BoardInterface {
    constructor() {
        super("AccumulateSheep");
        this.cnt = 1;
    }

    behave(player) {
        player.ResourceManager.addResource(RT.SHEEP, this.cnt);
    }

    increaseSheep() {
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
    }
}

class UpgradeHouse extends BoardInterface {
    constructor() {
        super("UpgradeHouse");
    }

    behave(player) {
        player.tileManager.setRoomType();
    }
}

class AccumulateStone extends BoardInterface {
    constructor() {
        super("AccumulateStone");
        this.cnt = 1;
    }

    behave(player) {
        player.ResourceManager.addResource(RT.STONE, this.cnt);
    }

    increaseStone() {
        this.cnt++;
    }
}

export { BuildMajorFacility, BuildFence, GrainUtilization, AccumulateSheep, IncreaseFamily, UpgradeHouse, AccumulateStone };
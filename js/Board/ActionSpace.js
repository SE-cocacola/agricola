import BoardInterface from './BoardInterface.js'
import ResourceManager from '../Resource/ResourceManager'
import RoomType from '../Tile/RoomType.js'

class ActionSpace extends BoardInterface {
    constructor() {}

    expandFarm(player, idx) {
        const roomType = player.tileManager.roomType;

        // idx 가 player의 board에서 주변에 있는지 확인해야 함.

        switch (roomType) {
            case RoomType.WOOD:
                player.resourceManager.removeResource(ResourceType.STONE, 5);
                player.resourceManager.removeResource(ResourceType.REED, 2);
                break;
            case RoomType.CLAY:
                player.resourceManager.removeResource(ResourceType.WOOD, 5);
                player.resourceManager.removeResource(ResourceType.REED, 2);
                break;
            case RoomType.STONE:
                player.resourceManager.removeResource(ResourceType.CLAY, 5);
                player.resourceManager.removeResource(ResourceType.REED, 2);
                break;
            default:
                break;
        }
        
        player.tileManager.playerBoard[idx] = roomType
    }

    accumulateFood(player, cnt) {
        player.ResourceManager.addResource(RT.FOOD, cnt)
    }

    grainSeed(player) {
        player.ResourceManager.addResource(RT.GRAIN, 1)
    }

    farmland(player, idx) {
        player.tileManager.addField(idx)
    }

    lessons(player) {
        // x
    }

    dayLaborer(player) {
        player.ResourceManager.addResource(RT.FOOD, 2)
    }

    fencing(player, cnt) {
        player.ResourceManager.removeResource(RT.WOOD, cnt)
        player.ResourceManager.addResource(RT.FENCE, cnt)
    }

    forrest(player, cnt) {
        player.ResourceManager.addResource(RT.WOOD, cnt)
    }

    clayPit(player, cnt) {
        player.ResourceManager.addResource(RT.CLAY, cnt)
    }

    reedBank(player, cnt) {
        player.ResourceManager.addResource(RT.REED, cnt)
    }

    fishing(player, cnt) {
        player.ResourceManager.addResource(RT.FOOD, cnt)
    }
}

export default ActionSpace
// import BoardInterface from './BoardInterface.js'
import ResourceManager from '../Resource/ResourceManager'
import RoomType from '../Tile/RoomType.js'
import { UIManager } from '../UIManager.js';

/*
ActionSpace의 생성자에 isActive를 선언하면 모든 메소드에서 isActive를 공유하게되고, 따라서
BoardInterface를 extends하려면 각 ActionSpace의 expandFarm, accumulatedFood 등을 class별로 짜야함.
ActionSpace class 안에 메소드로 정의하면 메소드 쓸 때는 더 편하지만 각 메소드에 있는 변수 접근자 메소드를 다시 짜야함...
그래서 생각한게 어차피 GameManager에서 각 player들을 생성하고, MajorCardManager와 행동칸들을 공통으로 관리하게될텐데
프론트에서도 인덱스로 행동칸 받아온다고했으니까 GameManager에 리스트형태로 ActionSpace의 칸들을 넣어둔 변수랑 RoundSpace의 칸들을 넣어둔 변수를 constructor에 선언해서
관리하는게 어떤지?
*/

class ActionSpace{
    constructor() {}

    expandFarm(player, idx) {
        let isActive = false;
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

    setActive() {
        this.isActive = !this.isActive;
    }
}

export default ActionSpace;
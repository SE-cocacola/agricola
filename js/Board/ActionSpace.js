import BoardInterface from './BoardInterface.js'
import ResourceManager from '../Resource/ResourceManager'
import RoomType from '../Tile/RoomType.js'
import { UIManager } from '../UIManager.js';
import BoardInterface from './BoardInterface';

/*
ActionSpace의 생성자에 isActive를 선언하면 모든 메소드에서 isActive를 공유하게되고, 따라서
BoardInterface를 extends하려면 각 ActionSpace의 expandFarm, accumulatedFood 등을 class별로 짜야함.
ActionSpace class 안에 메소드로 정의하면 메소드 쓸 때는 더 편하지만 각 메소드에 있는 변수 접근자 메소드를 다시 짜야함...
그래서 생각한게 어차피 GameManager에서 각 player들을 생성하고, MajorCardManager와 행동칸들을 공통으로 관리하게될텐데
프론트에서도 인덱스로 행동칸 받아온다고했으니까 GameManager에 리스트형태로 ActionSpace의 칸들을 넣어둔 변수랑 RoundSpace의 칸들을 넣어둔 변수를 constructor에 선언해서
관리하는게 어떤지?
*/

class ExpandFarm extends BoardInterface{
    constructor(){
        super("ExpandFarm");
    }
    
    behave(player, idx){
        const roomType = player.tileManager.roomType;

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

        player.tileManager.playerBoard[idx] = roomType;
    }
}

class AccumulateFood extends BoardInterface{
    constructor(){
        super("AccumulateFood");
        this.cnt = 1;
    }

    behave(player){
        player.ResourceManager.addResource(RT.FOOD, this.cnt);
    }

    // isActivate가 false이면 cnt++
    increaseFood(){
        this.cnt++;
    }
}

class GrainSeed extends BoardInterface{
    constructor(){
        super("GrainSeed");
    }
    behave(player){
        player.ResourceManager.addResource(RT.GRAIN, 1);
    }
}

class FarmLand extends BoardInterface{
    constructor(){
        super("FarmLand");
    }
    behave(player, idx){
        player.tileManager.addField(idx);
    }
}

class Lesson extends BoardInterface{
    constructor(){
        super("Lesson");
    }
    behave(player){
        
    }
} 

class DayLaborer extends BoardInterface{
    constructor(){
        super("DayLaborer");
    }
    behave(player){
        player.ResourceManager.addResource(RT.FOOD, 2);
    }
}

class Fencing extends BoardInterface{
    constructor(){
        super("Fencing");
    }
    behave(player, cnt){
        player.ResourceManager.removeResource(RT.WOOD, cnt);
        player.ResourceManager.addResource(RT.FENCE, cnt);
    }
}

class Forest extends BoardInterface{
    constructor(){
        super("Forest");
        this.cnt = 3;
    }
    behave(player){
        player.ResourceManager.addResource(RT.WOOD, this.cnt);
    }

    increaseWood(){
        this.cnt += 3;
    }
}

class ClayPit extends BoardInterface{
    constructor(){
        super("ClayPit");
        this.cnt = 1;
    }
    behave(player){
        player.ResourceManager.addResource(RT.CLAY, this.cnt);
    }

    increaseClay(){
        this.cnt++;
    }
}

class ReedBank extends BoardInterface{
    constructor(){
        super("ReedBank");
        this.cnt = 1;
    }
    behave(player){
        player.ResourceManager.addResource(RT.REED, this.cnt);
    }

    increaseReed(){
        this.cnt++;
    }
}

class Fishing extends BoardInterface{
    constructor(){
        super("Fishing");
        this.cnt = 1;
    }
    behave(player){
        player.ResourceManager.addResource(RT.FOOD, this.cnt);
    }

    increaseFood(){
        this.cnt++;
    }
}

export {ExpandFarm, AccumulateFood, GrainSeed, FarmLand, Lesson, DayLaborer, Fencing, Forest, ClayPit, ReedBank, Fishing};
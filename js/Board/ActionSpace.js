import BoardInterface from '../Board/BoardInterface.js';
import ResourceManager from '../Resource/ResourceManager.js'
import RoomType from '../Tile/RoomType.js'
import UIManager from '../UIManager.js';
import { RT } from '../Resource/ResourceType.js';

class ExpandFarm extends BoardInterface {
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

        this.setActivate();
    }
}

class AccumulateFood extends BoardInterface{
    constructor(){
        super("AccumulateFood");
        this.default = 1;
        this.cnt = 1;
    }

    behave(player){
        player.resourceManager.addResource(RT.FOOD, this.cnt);
        this.setActivate();
    }

    // isActivate가 false이면 cnt++
    increaseCnt(){
        this.cnt++;
    }
}

class GrainSeed extends BoardInterface{
    constructor(){
        super("GrainSeed");
    }
    behave(player){
        player.resourceManager.addResource(RT.GRAIN, 1);

        this.setActivate();
    }
}

class FarmLand extends BoardInterface{
    constructor(){
        super("FarmLand");
    }
    behave(player, idx){
        player.tileManager.addField(idx);

        this.setActivate();
    }
}

class Lesson extends BoardInterface{
    constructor(){
        super("Lesson");
    }
    behave(player){
        // 얘는 머임?
        this.setActivate();
    }
} 

class DayLaborer extends BoardInterface{
    constructor(){
        super("DayLaborer");
    }
    behave(player){
        player.resourceManager.addResource(RT.FOOD, 2);
        this.setActivate();
    }
}

class Forest extends BoardInterface{
    constructor(){
        super("Forest");
        this.default = 3;
        this.cnt = 3;
    }
    behave(player){
        player.resourceManager.addResource(RT.WOOD, this.cnt);
        this.setActivate();
    }

    increaseCnt(){
        this.cnt += 3;
    }
}

class ClayPit extends BoardInterface{
    constructor(){
        super("ClayPit");
        this.default = 1;
        this.cnt = 1;
    }
    behave(player){
        player.resourceManager.addResource(RT.CLAY, this.cnt);
        this.setActivate();
    }

    increaseCnt(){
        this.cnt++;
    }
}

class ReedBank extends BoardInterface{
    constructor(){
        super("ReedBank");
        this.default = 1;
        this.cnt = 1;
    }
    behave(player){
        player.resourceManager.addResource(RT.REED, this.cnt);
        this.setActivate();
    }

    increaseCnt(){
        this.cnt++;
    }
}

class Fishing extends BoardInterface{
    constructor(){
        super("Fishing");
        this.default = 1;
        this.cnt = 1;
    }
    behave(player){
        player.resourceManager.addResource(RT.FOOD, this.cnt);
        this.setActivate();
    }

    increaseCnt(){
        this.cnt++;
    }
}

export {ExpandFarm, AccumulateFood, GrainSeed, FarmLand, Lesson, DayLaborer, Forest, ClayPit, ReedBank, Fishing};
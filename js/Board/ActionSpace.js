import BoardInterface from '../Board/BoardInterface.js';
import ResourceManager from '../Resource/ResourceManager.js'
import RoomType from '../Tile/RoomType.js'
import UIManager from '../UIManager.js';

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
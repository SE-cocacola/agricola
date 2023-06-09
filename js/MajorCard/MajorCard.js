import MajorCardInterface from '../MajorCard/MajorCardInterface.js';
import { RT } from "../Resource/ResourceType.js";
import ResourceManager from '../Resource/ResourceManager.js';
import Player from '../Player.js';

/*
 * 음식 교환할 때 개수도 같이 받아야 함
 * actionType도 enum으로 만들지
 * 화덕을 화로로 교환하는 것 추가해야됨
 * 우물 메소드는 어떻게 추가할지
 */

// 화로 1
class Brazier1 extends MajorCardInterface{
    constructor() {
        super();
        this.cardIdx = 0;
        this.name = "brazier1";
        this.needResource = [
            {resourceType: RT.CLAY, amount: 2}
        ];
        this.score = 1;
    }

    wheneverAction(player){
        player.resourceManager.removeResource(RT.SHEEP, 1);
        player.resourceManager.addResource(RT.FOOD, 2);
    }

    specificAction(player, actionType) {
        switch (actionType) {
          case "Baking":
            // 빵굽기 로직
            player.resourceManager.removeResource(RT.GRAIN, 1);
            player.resourceManager.addResource(RT.FOOD, 2);
            break;
          default:
            break;
        }
    }
}

// 화로 2
class Brazier2 extends MajorCardInterface{
    constructor() {
        super();
        this.cardIdx = 1;
        this.name = "brazier2";
        this.needResource = [
            {resourceType: RT.CLAY, amount: 3}
        ];
        this.score = 1;
    }

    wheneverAction(player){
        player.resourceManager.removeResource(RT.SHEEP, 1);
        player.resourceManager.addResource(RT.FOOD, 2);
    }

    specificAction(player, actionType) {
        switch (actionType) {
          case "Baking":
            // 빵굽기 로직
            player.resourceManager.removeResource(RT.GRAIN, 1);
            player.resourceManager.addResource(RT.FOOD, 2);
            break;
          default:
            break;
        }
    }
}

// 화덕 1
class FirePot1 extends MajorCardInterface{
    constructor() {
        super();
        this.cardIdx = 2;
        this.name = "firePot1";
        this.needResource = [
            {resourceType: RT.CLAY, amount: 4}
            // 화로 반납 추가
        ];
        this.score = 1;
    }

    wheneverAction(player){
        player.resourceManager.removeResource(RT.SHEEP, 1);
        player.resourceManager.addResource(RT.FOOD, 2);
    }

    specificAction(player, actionType) {
        switch (actionType) {
          case "Baking":
            // 빵굽기 로직
            player.resourceManager.removeResource(RT.GRAIN, 1);
            player.resourceManager.addResource(RT.FOOD, 3);
            break;
          default:
            break;
        }
    }
}

// 화덕 2
class FirePot2 extends MajorCardInterface{
    constructor() {
        super();
        this.cardIdx = 3;
        this.name = "firePot2";
        this.needResource = [
            {resourceType: RT.CLAY, amount: 5}
            // 화로 반납 추가
        ];
        this.score = 1;
    }

    wheneverAction(player){
        player.resourceManager.removeResource(RT.SHEEP, 1);
        player.resourceManager.addResource(RT.FOOD, 2);
    }

    specificAction(player, actionType) {
        switch (actionType) {
          case "Baking":
            // 빵굽기 로직
            player.resourceManager.removeResource(RT.GRAIN, 1);
            player.resourceManager.addResource(RT.FOOD, 3);
            break;
          default:
            break;
        }
    }
}

// 흙가마
class EarthenKiln extends MajorCardInterface{
    constructor() {
        super();
        this.cardIdx = 4;
        this.name = "earthenKiln";
        this.needResource = [
            {resourceType: RT.CLAY, amount: 3},
            {resourceType: RT.STONE, amouont: 1}
        ];
        this.score = 2;
    }

    specificAction(player, actionType, amount) {
        switch (actionType) {
          case "Baking":
            // 빵굽기 로직
            player.resourceManager.removeResource(RT.GRAIN, amount);
            player.resourceManager.addResource(RT.FOOD, 5 * amount);
            break;
          default:
            break;
        }
    }
}

// 돌가마
class StoneKiln extends MajorCardInterface{
    constructor() {
        super();
        this.cardIdx = 5;
        this.name = "stoneKiln";
        this.needResource = [
            {resourceType: RT.CLAY, amount: 1},
            {resourceType: RT.STONE, amount: 3}
        ];
        this.score = 3;
    }


    specificAction(player, actionType, amount) {
        switch (actionType) {
            case "Baking":
                // 빵굽기 로직
                player.resourceManager.removeResource(RT.GRAIN, amount);
                player.resourceManager.addResource(RT.FOOD, 4 * amount);
                break;
            default:
                break;
        }
    }}

// 가구 제작소
class FurnitureFactory extends MajorCardInterface{
    constructor() {
        super();
        this.cardIdx = 6;
        this.name = "furnitureFactory";
        this.needResource = [
            {resourceType: RT.WOOD, amount: 2},
            {resourceType: RT.STONE, amount: 2}
        ];
        this.score = 2;
    }

    specificAction(player, actionType) {
        const woodCnt = player.resourceManager.resources[0].amount;
        switch (actionType) {
            case "Harvest":
                // 수확 로직
                player.resourceManager.addResource(RT.FOOD, 2 * woodCnt);
                break;
            default:
                break;
        }
    }
}

// 그릇 제작소
class BowlFactory extends MajorCardInterface{
    constructor() {
        super();
        this.cardIdx = 7;
        this.name = "bowlFactory";
        this.needResource = [
            {resourceType: RT.CLAY, amount: 2},
            {resourceType: RT.STONE, amount: 2}
        ];
        this.score = 2;
    }

    specificAction(player, actionType) {
        const clayCnt = player.resourceManager.resources[1];
        switch (actionType) {
            case "Harvest":
                // 수확 로직
                player.resourceManager.addResource(RT.FOOD, 2 * clayCnt);
                break; 
            default:
                break;
        }
    }
}

// 바구니 제작소
class BasketFactory extends MajorCardInterface{
    constructor() {
        super();
        this.cardIdx = 8;
        this.name = "basketFactory";
        this.needResource = [
            {resourceType: RT.REED, amount: 2},
            {resourceType: RT.STONE, amount: 2}
        ];
        this.score = 2;
    }

    specificAction(player, actionType) {
        const reedCnt = player.resourceManager.resources[3];
        switch (actionType) {
            case "Harvest":
                // 수확 로직
                player.resourceManager.addResource(RT.FOOD, 2 * reedCnt);
                break;
            default:
                break;
        }
    }
}

// 우물
class Well extends MajorCardInterface{
    constructor() {
        super();
        this.cardIdx = 9;
        this.name = "well";
        this.needResource = [
            {resourceType: RT.WOOD, amount: 1},
            {resourceType: RT.STONE, amount: 3}
        ];
        this.score = 4;
    }

    specificAction() {

    }
}

export {
    Brazier1,
    Brazier2,
    FirePot1,
    FirePot2,
    EarthenKiln,
    StoneKiln,
    FurnitureFactory,
    BowlFactory,
    BasketFactory,
    Well
  };
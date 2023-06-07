import Player from "./Player.js";
import ResourceManager from "./Resource/ResourceManager.js";
import TileManager from "./Tile/TileManager.js";
import Field from "./Tile/Field.js";
import Pen from "./Tile/Pen.js";
import Room from "./Tile/Room.js";

class HarvestManager{
    constructor(){
    }

    // 농장 단계, 가족 먹여 살리기 단계, 번식 단계 순서대로

    doHarvest(player){
        // 수확하기
        const playerField = player.tileManager.fieldPosition;
        for(let i=0; i<playerField.length; i++){
            // fieldPosition의 idx 확인해서 playerBoard[idx]에 들어간 다음 crop에 배열 있는 경우에 하나 pop하고 player의 자원매니저에 추가
            if(player.tileManager.playBoard[playerField[i]].crop[0] === ResourceType.Grain) {
                player.tileManager.playBoard[playerField[i]].crop.pop();
                player.resourceManager.resources[4].amount += 1; //grain
            } else {
                player.tileManager.playBoard[playerField[i]].crop.pop();
                player.resourceManager.resources[5].amount += 1; //vegetable
            }
            
        }

        // 가족 음식 주기(기아 토큰까지)
        // player의 resourceManager에서 adult, child 수 체크하고 food 수 체크해서 constructor 값 바꾸고 food 부족하면 기아토큰 추가
        const food = player.resourceManager.resources[6].amount;
        const adultFarmer = player.resourceManager.resources[14].amount;
        const childFarmer = player.resourceManager.resources[15].amount;
        if(food >= adultFarmer * 2 + childFarmer){
            player.resourceManager.resources[6].amount -= (adultFarmer * 2 + childFarmer);
        }else{
            player.resourceManager.resources[6].amount = 0;
            // begging 추가
            player.resourceManager.resources[12].amount += (adultFarmer * 2 + childFarmer) - food;
        }


        // 가축 번식
        // player의 tileManager에서 외양간, 우리 판단해서 추가 및 resourceManager constructor 값 바꾸기


        // 어린이 성인으로 전환
        // player의 Room Tile 속성 바꾸기
        // resourceManager의 constructor 값 바꾸기
        player.resourceManager.resources[14]++;
        player.resourceManager.resources[15]--;
    }
}

export default HarvestManager;
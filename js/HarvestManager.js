import Player from "./Player.js";
import ResourceManager from "./Resource/ResourceManager.js";
import TileManager from "./Tile/TileManager.js";
import Field from "./Tile/Field.js";
import Pen from "./Tile/Pen.js";
import Room from "./Tile/Room.js";
import { RT } from "./Resource/ResourceType.js";

class HarvestManager{
    constructor(){
    }

    // 농장 단계, 가족 먹여 살리기 단계, 번식 단계 순서대로

    doHarvest(player){
        // 수확하기
        let playerBoard = player.tileManager.playerBoard;
        const fieldPosition = player.tileManager.fieldPosition;

        for(let i=0; i<fieldPosition.length; i++){
            // fieldPosition의 idx 확인해서 playerBoard[idx]에 들어간 다음 crop에 배열 있는 경우에 하나 pop하고 player의 자원매니저에 추가
            if(playerBoard[fieldPosition[i]].plantType === RT.GRAIN) {
                playerBoard[fieldPosition[i]].crop.pop();
                if(playerBoard[fieldPosition[i]].crop.length === 0){
                    playerBoard[fieldPosition[i]].isPlant = false;
                    playerBoard[fieldPosition[i]].plantType = "";
                    // field 위의 grain 사진도 없애야함 - 우린 필요없음
                }
                player.resourceManager.resources[4].amount++; //grain
            } else if(playerBoard[fieldPosition[i]].plantType === RT.VEGETABLE){
                playerBoard[fieldPosition[i]].crop.pop();
                if(playerBoard[fieldPosition[i]].crop.length === 0){
                    playerBoard[fieldPosition[i]].isPlant = false;
                    playerBoard[fieldPosition[i]].plantType = "";
                    // field 위의 vegetable 사진도 없애야함 - 우린 필요없음
                }
                player.resourceManager.resources[5].amount++; //vegetable
            }
            
        }

        // 가족 음식 주기(기아 토큰까지)
        // player의 resourceManager에서 adult, child 수 체크하고 food 수 체크해서 constructor 값 바꾸고 food 부족하면 기아토큰 추가
        let food = player.resourceManager.resources[6].amount;
        let adultFarmer = player.resourceManager.resources[14].amount;
        let childFarmer = player.resourceManager.resources[15].amount;

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
        const roomPosition = player.tileManager.roomPosition;
        let childPosition = [];
        for(let i=0; i<roomPosition.length; i++){
            if(playerBoard[roomPosition[i]].adult === 0 && playerBoard[roomPosition[i]].isChild){
                childPosition.push(roomPosition[i]);
                playerBoard[roomPosition[i]].adult = 1;
                playerBoard[roomPosition[i]].isChild = false;
                player.resourceManager.resources[14].amount++;
                player.resourceManager.resources[15].amount--;
            }
        }

        return childPosition;
    }
}

export default HarvestManager;
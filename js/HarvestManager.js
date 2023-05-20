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
        // player의 tileManager에서 Field인 객체 찾아서 거기에 수확할게 있다면 Field의 crop 리스트 수정하고, resourceManager constructor 값 바꾸기
        
        // 가족 음식 주기(기아 토큰까지)
        // player의 resourceManager에서 adult, child 수 체크하고 food 수 체크해서 constructor 값 바꾸고 food 부족하면 기아토큰 추가
        
        // 가축 번식
        // player의 tileManager에서 외양간, 우리 판단해서 추가 및 resourceManager constructor 값 바꾸기

        // 어린이 성인으로 전환
        // player의 Room Tile 속성 바꾸기, resourceManager의 constructor 값 바꾸기
    }
}

export default HarvestManager;
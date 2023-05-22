import ResourceManager from './Resource/ResourceManager.js'
import TileManager from './Tile/TileManager.js';
import { RT } from './Resource/ResourceType.js';

class Player {
    constructor(name) {
        this.name = name;
        this.leftTurn = 0;
        this.score = 0;
        this.resourceManager = new ResourceManager();
        this.tileManager = new TileManager();
    }

    getAdultFarmer() {
        return this.resourceManager.adultFarmer;
    }

    calculateScore() {
        const resources = this.resourceManager.resources;
        const tiles = this.tileManager.playerBoard;
        let playrScore = 0;

        for(let i=0; i<resources.length; i++){
          if(resources[i].resourceType === RT.GRAIN){
            if(resources[i].amount === 0){
              playrScore -= 1;
            }else if(1 <= resources[i].amount && resources[i].amount <= 3){
              playrScore += 1;
            }else if(4 <= resources[i].amount && resources[i].amount <= 5){
              playrScore += 2;
            }else if(6 <= resources[i].amount && resources[i].amount <= 7){
              playrScore += 3;
            }else{
              playrScore += 4;
            }
          }else if(resources[i].resourceType === RT.VEGETABLE){
            if(resources[i].amount === 0){
              playrScore -= 1;
            }else if(1 === resources[i].amount){
              playrScore += 1;
            }else if(2 === resources[i].amount){
              playrScore += 2;
            }else if(3 === resources[i].amount){
              playrScore += 3;
            }else{
              playrScore += 4;
            }
          }else if(resources[i].resourceType === RT.SHEEP){
            if(resources[i].amount === 0){
              playrScore -= 1;
            }else if(1 <= resources[i].amount && resources[i].amount <= 3){
              playrScore += 1;
            }else if(4 <= resources[i].amount && resources[i].amount <= 5){
              playrScore += 2;
            }else if(6 <= resources[i].amount && resources[i].amount <= 7){
              playrScore += 3;
            }else{
              playrScore += 4;
            }
          }else if(resources[i].resourceType === RT.BOAR){
            if(resources[i].amount === 0){
              playrScore -= 1;
            }else if(1 <= resources[i].amount && resources[i].amount <= 2){
              playrScore += 1;
            }else if(3 <= resources[i].amount && resources[i].amount <= 4){
              playrScore += 2;
            }else if(5 <= resources[i].amount && resources[i].amount <= 6){
              playrScore += 3;
            }else{
              playrScore += 4;
            }
          }else if(resources[i].resourceType === RT.CATTLE){
            if(resources[i].amount === 0){
              playrScore -= 1;
            }else if(1 === resources[i].amount){
              playrScore += 1;
            }else if(2 <= resources[i].amount && resources[i].amount <= 3){
              playrScore += 2;
            }else if(4 <= resources[i].amount && resources[i].amount <= 5){
              playrScore += 3;
            }else{
              playrScore += 4;
            }
          }else if(resources[i].resourceType === RT.FARMER){
            playrScore += resources[i].amount * 3;
          }else if(resources[i].resourceType === RT.BEGGING){
            playrScore -= resources[i].amount * 3;
          }else if(Array.isArray(this.resources[i])){
            // majorCard 확인, 인덱스 확인해서 점수 계산, 추가점수까지
            
          }
        }

        // 빈 칸, 밭, 우리, 방 - tileManager 돌면서 확인, 울타리 쳐진거 판별 어떤식으로?

    }

    makeTile(tileManager) {
    // TODO: Implement make tile logic
    }
    
    useMajorCard(resourceManager) {
      // TODO: Implement use major card logic
    }
    
    calScore(resourceManager) {
      // TODO: Implement calculate score logic
    }
    
    getResource() {
      // TODO: Implement get resource logic
    }
    
    movePlayer() {
      // TODO: Implement move player logic
    }
}

export default Player;
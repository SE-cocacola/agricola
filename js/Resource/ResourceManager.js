import { RT } from "../Resource/ResourceType.js";
import MajorCardManager from "../MajorCard/MajorCardManager.js";
import TileManager from "../Tile/TileManager.js";
import { Brazier1, Brazier2, FirePot1, FirePot2, EarthenKiln, StoneKiln, FurnitureFactory, BowlFactory, BasketFactory, Well} from '../MajorCard/MajorCard.js';

// 각 플레이어마다 생성되어 자원을 관리해주는 Manager Class
class ResourceManager{
    constructor() {
        this.resources = [];
    }

    // ResourceManager에서 플레이어의 자원을 모두 초기화 시키고, 선에 따라서 food에 값 추가
    initialize(isFirst){
        let wood = {resourceType: RT.WOOD, amount: 0};
        let clay = {resourceType: RT.CLAY, amount: 0};
        let stone = {resourceType: RT.STONE, amount: 0};
        let reed = {resourceType: RT.REED, amount: 0};
        let grain = {resourceType: RT.GRAIN, amount: 0};
        let vegetable = {resourceType: RT.VEGETABLE, amount: 0};
        let food;
        if(isFirst){
            food = {resourceType: RT.FOOD, amount: 2};
        }else{
            food = {resourceType: RT.FOOD, amount: 3};
        }
        
        let sheep = {resourceType: RT.SHEEP, amount: 0};
        let boar = {resourceType: RT.BOAR, amount: 0};
        let cattle = {resourceType: RT.CATTLE, amount: 0};
        let majorCard = {};
        let fence = {resourceType: RT.FENCE, amount: 0};
        let begging = {resourceType: RT.BEGGING, amount: 0};
        let pen = {resourceType: RT.PEN, amount: 0};
        let adultFarmer = {resourceType: RT.FARMER, amount: 2};
        let childFarmer = {resourceType: RT.FARMER, amount: 0};

        this.resources.push(wood, clay, stone, reed, grain, vegetable, food, sheep, boar, cattle, majorCard, fence, begging, pen, adultFarmer, childFarmer);
    }

    // 자원들 모두 가져오기
    getResource(){
        return this.resources[10];
    }

    // 자원 추가
    addResource(resourceType, amount) {
        const resource = this.resources.find(r => r.resourceType === resourceType);
        if (resource) {
          resource.amount += amount;
        }
        // resource.amount += amount;
    }

    // 자원 소비
    removeResource(resourceType, amount){
        const resource = this.resources.find(r => r.resourceType === resourceType);
        resource.amount -= amount;
    }

    // majorCard들 목록 조회
    getMajorCards(){
        return this.resources[12];
    }

    // cardIdx를 통해 특정 majorCard 조회
    getMajorCard(cardIdx) {
        switch (cardIdx) {
          case 0:
            return new Brazier1();
          case 1:
            return new Brazier2();
          case 2:
            return new FirePot1();
          case 3:
            return new FirePot2();
          case 4:
            return new EarthenKiln();
          case 5:
            return new StoneKiln();
          case 6:
            return new FurnitureFactory();
          case 7:
            return new BowlFactory();
          case 8:
            return new BasketFactory();
          case 9:
            return new Well();
          default:
            return null;
        }
    }

    addMajorCard(cardName){
      let cardInstance;
    
      switch (cardName) {
        case 'brazier1':
          cardInstance = new Brazier1();
          break;
        case 'brazier2':
          cardInstance = new Brazier2();
          break;
        case 'firePot1':
          cardInstance = new FirePot1();
          break;
        case 'firePot2':
          cardInstance = new FirePot2();
          break;
        case 'earthenKiln':
          cardInstance = new EarthenKiln();
          break;
        case 'stoneKiln':
          cardInstance = new StoneKiln();
          break;
        case 'furnitureFactory':
          cardInstance = new FurnitureFactory();
          break;
        case 'bowlFactory':
          cardInstance = new BowlFactory();
          break;
        case 'basketFactory':
          cardInstance = new BasketFactory();
        case 'well':
          cardInstance = new Well();
          break;
        default:
          console.error('Invalid cardName: ' + cardName);
          return;
      }
  
      // key-value 형태로 majorCard에 추가
      this.majorCard = this.resources[10];
      this.majorCard[cardName] = cardInstance;
    }
}

export default ResourceManager;
import { RT } from "../Resource/ResourceType.js";
import { MCM } from "../MajorCard/MajorCardManager.js";
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
        let majorCard = [];
        let fence = {resourceType: RT.FENCE, amount: 0};
        let begging = {resourceType: RT.BEGGING, amount: 0};
        let pen = {resourceType: RT.PEN, amount: 0};
        let adultFarmer = {resourceType: RT.FARMER, amount: 2};
        let childFarmer = {resourceType: RT.FARMER, amount: 0};

        this.resources.push(wood, clay, stone, reed, grain, vegetable, food, sheep, boar, cattle, majorCard, fence, begging, pen, adultFarmer, childFarmer);
    }

    // 자원들 모두 가져오기
    getResource(){
        return this.resources;
    }

    // 자원 추가
    addResource(resourceType, amount) {
        const resource = this.resources.find(r => r.resourceType === resourceType);
        resource.amount += amount;
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

    addMajorCard(cardIdx){
        this.resources[12].push(getMajorCard(cardIdx));
    }

    removeMajorCard(cardIdx) {
        for (let i = 0; i < this.resources[12].length; i++) {
          if (this.resources[12][i].cardIdx === cardIdx) {
            this.resources[12].splice(i, 1);
            break;
          }
        }
    }
}

export default ResourceManager;
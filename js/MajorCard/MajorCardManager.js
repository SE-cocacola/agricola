import {
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
  } from '../MajorCard/MajorCard.js';

class MajorCardManager {
    constructor() {
        this.cards = {
            "brazier1" : new Brazier1(),
            "brazier2" : new Brazier2(),
            "firePot1" : new FirePot1(),
            "firePot2" : new FirePot2(),
            "earthenKiln" : new EarthenKiln(),
            "stoneKiln" : new StoneKiln(),
            "furnitureFactory" : new FurnitureFactory(),
            "bowlFactory" : new BowlFactory(),
            "basketFactory" : new BasketFactory(),
            "well" : new Well()
        };
    }
    
    initialize(){}

    // 플레이어가 주요 설비 카드를 가져가면 Manager의 Constructor 내의 카드를 없애거나 사용하지 못하게
    removeMajorCard(cardName){
        delete this.cards[cardName];
    }

    // 화로가 들어오면 화덕을 교환해주는 함수
    exchangeMajorCard(){
    }
}
  
  export default MajorCardManager;
  
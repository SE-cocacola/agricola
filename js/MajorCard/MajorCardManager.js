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
            "firePot" : new FirePot1(),
            "firePot2" : new FirePot2(),
            "earthenKiln" : new EarthenKiln(),
            "stoneKiln" : new StoneKiln(),
            "furnitureFactory" : new FurnitureFactory(),
            "bowlFactory" : new BowlFactory(),
            "basketFactory" : new BasketFactory(),
            "well" : new Well()
        };
    }
    
    initialize(){
        // const brazier1 = new Brazier1();
        // const brazier2 = new Brazier2();
        // const firePot1 = new FirePot1();
        // const firePot2 = new FirePot2();
        // const earthenKiln = new EarthenKiln();
        // const stoneKiln = new StoneKiln();
        // const furnitureFactory = new FurnitureFactory();
        // const bowlFactory = new BowlFactory();
        // const basketFactory = new BasketFactory();
        // const well = new Well();
        //
        // this.cards.push(brazier1, brazier2, firePot1, firePot2, earthenKiln,
        //     stoneKiln, furnitureFactory, bowlFactory, basketFactory, well);
    }

    // 플레이어가 주요 설비 카드를 가져가면 Manager의 Constructor 내의 카드를 없애거나 사용하지 못하게
    popMajorCard(cardName){
        for (let card of this.cards) {
            card.name = cardName;
            return
        }
    }

    // 화로가 들어오면 화덕을 교환해주는 함수
    exchangeMajorCard(inCardIdx, outCardIdx){
        this.cards
    }
}
  
  export default MajorCardManager;
  
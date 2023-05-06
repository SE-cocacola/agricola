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
    Well,
  } from './MajorCardInterface';
  
class MajorCardManager {
    constructor() {
      this.cards = [
        // new Brazier1(),
        // new Brazier2(),
        // new FirePot1(),
        // new FirePot2(),
        // new EarthenKiln(),
        // new StoneKiln(),
        // new FurnitureFactory(),
        // new BowlFactory(),
        // new BasketFactory(),
        // new Well()
      ];
    }
    
    initialize(){
        const brazier1 = new Brazier1();
        const brazier2 = new Brazier2();
        const firePot1 = new FirePot1();
        const firePot2 = new FirePot2();
        const earthenKiln = new EarthenKiln();
        const stoneKiln = new StoneKiln();
        const furnitureFactory = new FurnitureFactory();
        const bowlFactory = new BowlFactory();
        const basketFactory = new BasketFactory();
        const well = new Well();

        this.cards.push(brazier1, brazier2, firePot1, firePot2, earthenKiln,
            stoneKiln, furnitureFactory, bowlFactory, basketFactory, well);
    }


    removeMajorCard(cardIdx){
        const takenCard = this.cards[cardIdx];
        this.cards[cardIdx] = null;
    }
    
    exchangeMajorCard(cardIdx){
        // 화로와 화덕 교환 로직
    }
}
  
  export { MajorCardManager as MCM };
  
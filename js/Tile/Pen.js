import Tile from "../Tile/Tile.js";

class Pen extends Tile {
    constructor() {
      super("pen");
      this.stable = false;
      this.animal = null;
      this.count = 0;
    }

    // 동물 데려오기
    bringAnimal(animalType, howMany) {
        if(this.addAnimal === null){
            this.animal = animalType;
            this.count = howMany;
        }else{
            console.log("There is already another animal.");
        }
    }

    // 동물 번식
    // 룰북 봐야됨

    // 동물 추가
    addAnimal(howMany){
        this.count += howMany;
    }

    // 동물 음식으로 바꾸기
    removeAnimal(howMany){
        this.count -= howMany;
        if(this.count === 0){
            this.animal = null;
        }
    }

    // 외양간 추가
    addStable(){
        this.stable = true;
    }
}

export default Pen;
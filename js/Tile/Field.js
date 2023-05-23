import Tile from "../Tile/Tile.js";

class Field extends Tile {
    constructor() {
      super("field");
      this.isPlant = false;
      this.crop = [];
    }

    // 씨 뿌리기
    plantCrop(crop) {
      // this.crop.push crop에 씨 뿌리고 수확하기
      this.isPlant = true;
      this.crop = crop;
    } 

    // 음식으로 바꾸기
}

export default Field;
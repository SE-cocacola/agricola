import ResourceManager from './Resource/ResourceManager.js'
import TileManager from './Tile/TileManager.js';

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
class MajorCardInterface {
  constructor() {
    if (this.constructor === MajorCardInterface) {
      throw new TypeError("Abstract class 'MajorCardInterface' cannot be instantiated directly.");
    }
    this.cardIdx = "";
    this.name = "";
    this.needResource = [];
    this.score = "";
  }

  getCardIdx(){
    return this.cardIdx;
  }
  
  getName() {
    return this.name;
  }
  
  getNeedResource() {
    return this.needResource;
  }
  
  getScore() {
    return this.score;
  }

  // wheneverAction(resourceType){

  // }

  // specificAction(actionType){

  // }
}
export default MajorCardInterface;

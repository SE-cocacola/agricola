class MajorCardInterface {
  constructor() {
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

  wheneverAction(resourceType){

  }

  specificAction(actionType){

  }
}

export default MajorCardInterface;
  
import GameManager from './GameManager.js'
import { UIManager } from './UIManager.js'

class BoardInterface {
  constructor(name) {
    this.isActivate = false;
    this.name = name;
  }

  behave() {}

  setActivate() {
    this.isActivate = true;
  }

  setDeactivate(){
    this.isActivate = false;
  }
}

export default BoardInterface;
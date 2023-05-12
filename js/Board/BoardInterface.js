import GameManager from './GameManager.js'
import { UIManager } from './UIManager.js'

class BoardInterface {
  constructor(name) {
    this.isActive = false
    this.name = name
  }

  behave() {}

  setActive() {
    this.isActive = !this.isActive
  }
}

export default BoardInterface

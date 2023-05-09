class UIInterface {
    constructor() {
      if (new.target === UIInterface) {
        throw new TypeError("Cannot construct UIInterface instances directly");
      }
    }
    
    initUI() {
      throw new Error("initUI() method not implemented");
    }
    
    updateUI() {
      throw new Error("updateUI() method not implemented");
    }
    
  addHoverEffectToDiv(div) {
    throw new Error("addHoverEffectToDiv() method not implemented");
  }
    addButtonEventListeners() {
      throw new Error("addButtonEventListeners() method not implemented");
    }
  
    // 선 정하기
  selectOrder(player1, player2) {
    throw new Error("selectOrder() method not implemented");
  }
  
  // 턴 바꾸기
  switchTurns() {
    throw new Error("switchTurns() method not implemented");
  }
}
  
export default UIInterface;
  
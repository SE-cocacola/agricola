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
    
    // add any other required methods here
  }
  
  export default UIInterface;
  
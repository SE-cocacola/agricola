import UIInterface from './UIInterface.js';

export class UIManager extends UIInterface {
    constructor() {
      super();
      // add any additional initialization code here
    }
    
    initUI() {
      // implementation code for initializing the UI
    }
    
    updateUI() {
      // implementation code for updating the UI
    }
    
    // add any other required methods here
    addHoverEffectToDiv(div) {
        div.addEventListener("mouseover", function() {
          div.classList.add("hover-red");
        });
        div.addEventListener("mouseout", function() {
          div.classList.remove("hover-red");
        });
    }
      
    // removeHoverEffectFromDiv(div) {
    //     div.removeEventListener("mouseover", function() {
    //       div.classList.add("hover-red");
    //     });
    //     div.removeEventListener("mouseout", function() {
    //       div.classList.remove("hover-red");
    //     });
    // }
}
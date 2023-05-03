import UIInterface from './UIInterface.js';

export class UIManager extends UIInterface {
    constructor() {
      super();
      // add any additional initialization code here
      this.popup = null;
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

    // Function to create and show the popup window
    openPopup() {
        if (!this.popup) {
          this.popup = document.createElement("div");
          this.popup.classList.add("popup");
          const popupContent = document.createElement("div");
          popupContent.classList.add("popup-content");
          popupContent.innerHTML = "<p>This is the popup content.</p>";
          const closeButton = document.createElement("button");
          closeButton.innerHTML = "Close";
          closeButton.addEventListener("click", () => {
            this.closePopup();
          });
          this.popup.appendChild(popupContent);
          this.popup.appendChild(closeButton);
          document.body.appendChild(this.popup);
        }
      }
    
      closePopup() {
        if (this.popup) {
          document.body.removeChild(this.popup);
          this.popup = null;
        }
      }
    
      addButtonEventListeners() {
        const buttons = document.querySelectorAll(".icon");
        buttons.forEach((button) => {
          button.addEventListener("click", () => {
            this.openPopup();
          });
        });
      }
}
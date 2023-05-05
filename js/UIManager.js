import UIInterface from './UIInterface.js';

export class UIManager extends UIInterface {
    constructor() {
      super();
      // add any additional initialization code here
      this.popup = null;
      const scoreboard1 = document.querySelector('.score_board:nth-of-type(1)');
      const scoreboard2 = document.querySelector('.score_board:nth-of-type(2)');
      let isPlayer1Turn = true;
    }
    
    initUI() {
      // implementation code for initializing the UI
    }
    
    updateUI() {
      // implementation code for updating the UI
    }
    
    // 마우스 오버 효과
    addHoverEffectToDiv(div) {
        div.addEventListener("mouseover", function() {
          div.classList.add("hover-red");
        });
        div.addEventListener("mouseout", function() {
          div.classList.remove("hover-red");
        });
    }
      addButtonEventListeners() {
        const buttons = document.querySelectorAll(".icon");
        buttons.forEach((button) => {
          button.addEventListener("click", () => {
            this.openPopup();
          });
        });
      }
    
      // 선 정하기
    selectOrder(player1, player2) {
      const randomPlayerIndex = Math.floor(Math.random() * 2);
    
      const firstPlayer = (randomPlayerIndex === 0) ? player1 : player2;
      const secondPlayer = (randomPlayerIndex === 0) ? player2 : player1;
      
      if (firstPlayer === player1) {
        isPlayer1Turn = true;
      } else {
        isPlayer1Turn = false;
      }
    
      return [firstPlayer, secondPlayer];
    }
    
    // 턴 바꾸기
    switchTurns() {
      if (isPlayer1Turn) {
        scoreboard1.style.borderColor = 'red';
        scoreboard2.style.borderColor = 'black';
      } else {
        scoreboard1.style.borderColor = 'black';
        scoreboard2.style.borderColor = 'red';
      }
      isPlayer1Turn = !isPlayer1Turn;
    }
    
    // Example usage:
    switchTurns(); // Changes border color to red for player 1
    switchTurns(); // Changes border color back to black for player 2
      
}
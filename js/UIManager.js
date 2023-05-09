import UIInterface from './UIInterface.js';

export class UIManager extends UIInterface {
    constructor() {
      super();
      // add any additional initialization code here
      this.popup = null;
      const scoreboard1 = document.querySelector('.score_board:nth-of-type(1)');
      const scoreboard2 = document.querySelector('.score_board:nth-of-type(2)');
      this.isPlayer1Turn = true;
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

    selectOrder() {
        document.getElementById("start-order-btn").insertAdjacentHTML('afterend', `<p>선이 정해졌습니다. 확인해주세요</p>`);
        
        
      const orderToken = Math.floor(Math.random() * 2) + 1;

      // 선 정한 뒤 Manager에 반영
      this.isPlayer1Turn = (orderToken === 1);
      if (orderToken === 1) {
          document.getElementById("player1text").textContent = "선";
          document.getElementById("player2text").textContent = "X";
      } else {
          document.getElementById("player1text").textContent = "X";
          document.getElementById("player2text").textContent = "선";
      }

      // 뒤집는 효과
      const flipBtns = document.querySelectorAll(".flip-button");

      flipBtns.forEach(btn => {
          btn.addEventListener("click", function() {
              const cardBody = btn.parentElement;
              const flipCard = cardBody.querySelector(".flip-card-inner");
              flipCard.classList.toggle("flipped");
          });
          btn.style.display = "block";
      });

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
      this.isPlayer1Turn = !this.isPlayer1Turn;
    }

}
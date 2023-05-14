import UIInterface from './UIInterface.js';

export class UIManager extends UIInterface {
    constructor() {
      super();
      // add any additional initialization code here
      this.popup = null;
      this.scoreboard1 = document.getElementById("score1");
      this.scoreboard2 = document.getElementById("score2");
      this.isPlayer1Turn = true;

      this.isPlayer1First = true;
      this.imgPlayer1 = document.getElementById("player1_first");
      this.imgPlayer2 = document.getElementById("player2_first");

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
      this.isPlayer1First = this.isPlayer1Turn;
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

      

      if(this.isPlayer1Turn){
        this.scoreboard1.style.borderColor = 'red';
        this.imgPlayer2.style.display = "none";
      }else{
        this.scoreboard2.style.borderColor = 'red';
        this.imgPlayer1.style.display = "none";
      }
    }
    
    // 턴 바꾸기
    switchTurns() {
        if (this.isPlayer1Turn) {
            this.scoreboard1.style.borderColor = 'black';
            this.scoreboard2.style.borderColor = 'red';
        } else {
            this.scoreboard1.style.borderColor = 'red';
            this.scoreboard2.style.borderColor = 'black';
        }
        this.isPlayer1Turn = !this.isPlayer1Turn;
    }

    // 선 바꾸기
    switchFirst(){
      this.isPlayer1First = !this.isPlayer1First;
      if(this.isPlayer1First){
          this.imgPlayer1.style.display = "block";
          this.imgPlayer2.style.display = "none";
      }
      else{
          this.imgPlayer1.style.display = "none";
          this.imgPlayer2.style.display = "block";
      }
    }

    // action_round의 background_img 바꾸기
    changeActionRoundImage(actionRound) {
      const action_round = actionRound.toString();
      const actionRoundDiv = document.getElementById(action_round);
      
      switch (actionRound) {
        case 1:
          actionRoundDiv.style.backgroundImage = "url('image/rule1.jpeg')";
          break;
        case 2:
          actionRoundDiv.style.backgroundImage = "url('image/rule2.jpeg')";
          break;
        case 3:
          actionRoundDiv.style.backgroundImage = "url('image/rule3.jpeg')";
          break;
          
        default:
          actionRoundDiv.style.backgroundImage = "none";
          break;
      }
    }
}

/*
규민: 2, 7, 9
산해: 3, 4, 6
영웅: 1, 5. 8
 */
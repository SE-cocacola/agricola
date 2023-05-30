class UIInterface {
    constructor() {
      if (new.target === UIInterface) {
        throw new TypeError("Cannot construct UIInterface instances directly");
      }
        this.scoreboard1 = document.getElementById("score1");
        this.scoreboard2 = document.getElementById("score2");
        this.isPlayer1Turn = true;

        this.isPlayer1First = true;
        this.imgPlayer1 = document.getElementById("player1_first");
        this.imgPlayer2 = document.getElementById("player2_first");
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
   selectOrder(firstPlayer) {
     console.log("uiinterface");
    document.getElementById("start-order-btn").insertAdjacentHTML('afterend', `<p>선이 정해졌습니다. 확인해주세요</p>`);        
    // const orderToken = Math.floor(Math.random() * 2) + 1;
    console.log(firstPlayer===1);
    // 선 정한 뒤 Manager에 반영
    this.isPlayer1Turn = (firstPlayer === 1);
    console.log(this.isPlayer1Turn);
    this.isPlayer1First = this.isPlayer1Turn;
    if (this.isPlayer1Turn === true) {
        document.getElementById("player1text").textContent = "선";
        document.getElementById("player2text").textContent = "X";
    } else {
        document.getElementById("player1text").textContent = "X";
        document.getElementById("player2text").textContent = "선";
    }

    // 뒤집는 효과
    const flipBtns = document.querySelectorAll(".flip-button");

    flipBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const cardBody = btn.parentElement;
            const flipCard = cardBody.querySelector(".flip-card-inner");
            flipCard.classList.toggle("flipped");
        });
        btn.style.display = "block";
    });


    if (this.isPlayer1Turn) {
        this.scoreboard1.style.borderColor = 'red';
        this.imgPlayer2.style.display = "none";
    } else {
        this.scoreboard2.style.borderColor = 'red';
        this.imgPlayer1.style.display = "none";
    }

    this.showFarmer("board6", "Red");
    this.showFarmer("board11", "Red");

    this.showFarmer("board21", "Blue");
    this.showFarmer("board26", "Blue");
    
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

// 파라미터로 div읽어오고 농부 이미지 해당 div태그 띄워지게
showFarmer(id, farmerType){
  const farmboard = document.getElementById(id);
  const newFarmerImage = document.createElement("img");
  if (farmerType=="Red") newFarmerImage.src = `./image/resource/farmer1.png`;
  else newFarmerImage.src = `./image/resource/farmer2.png`;
  newFarmerImage.classList.add('farmfarmer');
  farmboard.appendChild(newFarmerImage);        
}

}
  
export default UIInterface;
  
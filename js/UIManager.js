import UIInterface from './UIInterface.js';

export class UIManager extends UIInterface {
    constructor() {
        // 상속
        super();

        this.handleAnimalAddDelete = null;
        this.handleFenceAddDelete = null;
        this.handleBarnAddDelete = null;

    }

    initUI() {
        // implementation code for initializing the UI
    }

    updateUI() {
        // implementation code for updating the UI
    }

    // 마우스 오버 효과
    addHoverEffectToDiv(div) {
        div.addEventListener("mouseover", function () {
            div.classList.add("hover-red");
        });
        div.addEventListener("mouseout", function () {
            div.classList.remove("hover-red");
        });
    }


    // action_round의 background_img 바꾸기
    changeActionRoundImage(actionRound) {
      const action_round = actionRound.toString();
      const actionRoundDiv = document.getElementById(action_round);
      
      switch (actionRound) {
        case 1:
          actionRoundDiv.style.backgroundImage = "url('image/rule1.jpeg')";
          actionRoundDiv.style.backgroundSize = "contain";
          break;
        case 2:
          actionRoundDiv.style.backgroundImage = "url('image/rule2.jpeg')";
          actionRoundDiv.style.backgroundSize = "contain";
          break;
        case 3:
          actionRoundDiv.style.backgroundImage = "url('image/rule3.jpeg')";
          actionRoundDiv.style.backgroundSize = "contain";
          break;
          
        default:
          actionRoundDiv.style.backgroundImage = "none";
          break;
      }
    }
    
    // 가축 배치
    addAnimal() {
        const farmboards = document.querySelectorAll(".farmboard");
        const animalType = document.querySelector("#animal-type").value;
        const animalNumber = document.querySelector("#animal-number").value;
        farmboards.forEach(farmboard => {
            if (this.handleAnimalAddDelete) {
                farmboard.removeEventListener("click", this.handleAnimalAddDelete);
            }
            const handleClick = function () {
                const animalImage = farmboard.querySelector(".farmanimal");
                if (!animalImage) {
                    const newAnimalImage = document.createElement("img");
                    newAnimalImage.src = `./image/resource/${animalType}${animalNumber}.png`;
                    newAnimalImage.classList.add('farmanimal');
                    farmboard.appendChild(newAnimalImage);
                }
            };
            farmboard.addEventListener("click", handleClick);
        });
    }

    // 가축삭제
    removeAnimal() {
        const farmboards = document.querySelectorAll(".farmboard");
        farmboards.forEach(farmboard => {
            if (this.handleAnimalAddDelete) {
                farmboard.removeEventListener("click", this.handleAnimalAddDelete);
            }
            this.handleAnimalAddDelete = function () {
                const animalImage = farmboard.querySelector(".farmanimal");
                if (animalImage) {
                    farmboard.removeChild(animalImage);
                }
            };
            farmboard.addEventListener("click", this.handleAnimalAddDelete);
        });
    }

    // 울타리 치기
    addFence() {
        const rowfences = document.querySelectorAll(".row_bar");
        const colfences = document.querySelectorAll(".col_bar");
        const fenceType = document.querySelector("#fence-type").value;
        rowfences.forEach(rowfence => {
            if (this.handleFenceAddDelete) {
                rowfence.removeEventListener("click", this.handleFenceAddDelete);
            }
            const handleClick = function () {
                const fenceImage = rowfence.querySelector(".farmfence");
                if (!fenceImage) {
                    const newFenceImage = document.createElement("div");
                    if (fenceType === "Red") {
                        newFenceImage.style.backgroundColor = "red";
                    } else {
                        newFenceImage.style.backgroundColor = "blue";
                    }
                    newFenceImage.classList.add('farmfence');
                    rowfence.appendChild(newFenceImage);
                }
            };
            rowfence.addEventListener("click", handleClick);
        });

        colfences.forEach(colfence => {
            if (this.handleFenceAddDelete) {
                colfence.removeEventListener("click", this.handleFenceAddDelete);
            }

            const handleClick = function () {
                const fenceImage = colfence.querySelector(".farmfence");
                if (!fenceImage) {
                    const newFenceImage = document.createElement("div");
                    if (fenceType === "Red") {
                        newFenceImage.style.backgroundColor = "red";
                    } else {
                        newFenceImage.style.backgroundColor = "blue";
                    }
                    newFenceImage.classList.add('farmfence');
                    colfence.appendChild(newFenceImage);
                }
            };
            colfence.addEventListener("click", handleClick);
        });
    }

    // 울타리 삭제
    removeFence() {
        const rowfences = document.querySelectorAll(".row_bar");
        const colfences = document.querySelectorAll(".col_bar");
        rowfences.forEach(rowfence => {
            if (this.handleFenceAddDelete) {
                rowfence.removeEventListener("click", this.handleFenceAddDelete);
            }
            this.handleFenceAddDelete = function () {
                const fenceImage = rowfence.querySelector(".farmfence");
                if (fenceImage) {
                    rowfence.removeChild(fenceImage);
                }
            };
            rowfence.addEventListener("click", this.handleFenceAddDelete);
        });

        colfences.forEach(colfence => {
            if (this.handleFenceAddDelete) {
                colfence.removeEventListener("click", this.handleFenceAddDelete);
            }
            this.handleFenceAddDelete = function () {
                const fenceImage = colfence.querySelector(".farmfence");
                if (fenceImage) {
                    colfence.removeChild(fenceImage);
                }
            };
            colfence.addEventListener("click", this.handleFenceAddDelete);
        });
    }

    // 외양간 설치
    addBarn() {
        const farmboards = document.querySelectorAll(".farmboard");
        const barnType = document.querySelector("#barn-type").value;
        farmboards.forEach(farmboard => {
            if (this.handleBarnAddDelete) {
                farmboard.removeEventListener("click", this.handleBarnAddDelete);
            }
            const handleClick = function () {
                const barnImage = farmboard.querySelector(".farmbarn");
                if (!barnImage) {
                    const newBarnImage = document.createElement("img");
                    newBarnImage.src = `./image/resource/barn${barnType}.png`;
                    newBarnImage.classList.add('farmbarn');
                    farmboard.appendChild(newBarnImage);
                }
            };
            farmboard.addEventListener("click", handleClick);
        });
    }

    // 외양간 삭제
    removeBarn() {
        const farmboards = document.querySelectorAll(".farmboard");
        farmboards.forEach(farmboard => {
            if (this.handleBarnAddDelete) {
                farmboard.removeEventListener("click", this.handleBarnAddDelete);
            }
            this.handleBarnAddDelete = function () {
                const barnImage = farmboard.querySelector(".farmbarn");
                if (barnImage) {
                    farmboard.removeChild(barnImage);
                }
            };
            farmboard.addEventListener("click", this.handleBarnAddDelete);
        });
    }

    // 주요설비 팝업
    openPop() {
      document.getElementById("popup_layer").style.display = "block";
    }

    // 주요설비 팝업 닫기
    closePop() {
        document.getElementById("popup_layer").style.display = "none";
    }

    // 선 선택 팝업
    openSelect(){
        document.getElementById("popup_select").style.display = "block";
    }
    
    // 선 선택 팝업 닫기
    closeSelect() {
        document.getElementById("popup_select").style.display = "none";
    }
}
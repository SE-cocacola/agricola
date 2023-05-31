import UIInterface from './UIInterface.js';
import Game from './Game.js';

export class UIManager extends UIInterface {
    constructor() {
        // 상속
        super();

        this.handleAnimalAddDelete = null;
        this.handleFenceAddDelete = null;
        this.handleBarnAddDelete = null;
        this.handleFarmerAddDelete = null;
        this.handleRoomAddDelete = null;

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
        console.log("changeActionRound");
      var action_round = actionRound.toString();
      action_round = 'r' + action_round;
      const actionRoundDiv = document.getElementById(action_round);
      
      switch (actionRound) {
        case 1:
            actionRoundDiv.style.backgroundImage = "url('image/action/action_utility.png')";
            break;
        case 2:
            actionRoundDiv.style.backgroundImage = "url('image/action/action_fence.png')";
            break;
        case 3:
            actionRoundDiv.style.backgroundImage = "url('image/action/action_grain.png')";
            break;
        case 4:
            actionRoundDiv.style.backgroundImage = "url('image/action/action_sheep.png')";
            break;
        case 5:
            actionRoundDiv.style.backgroundImage = "url('image/action/action_expand.png')";
            break;
        case 6:
            actionRoundDiv.style.backgroundImage = "url('image/action/action_fixhouse.png')";
            break;
        case 7:
            actionRoundDiv.style.backgroundImage = "url('image/action/action_weststone.png')";
            break;
          
        default:
          actionRoundDiv.style.backgroundImage = "none";
          break;
      }
      actionRoundDiv.style.backgroundSize = "contain";
      actionRoundDiv.style.backgroundRepeat = "no-repeat";
      actionRoundDiv.style.backgroundPosition = "center";
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

    // 가족 올리기
    addFarmer() {
        const farmboards = document.querySelectorAll(".farmboard");
        const farmerType = document.querySelector("#farmer-type").value;
        farmboards.forEach(farmboard => {
            if (this.handleFarmerAddDelete) {
                farmboard.removeEventListener("click", this.handleFarmerAddDelete);
            }
            const handleClick = function () {
                const farmerImage = farmboard.querySelector(".farmfarmer");
                if (!farmerImage) {
                    const newFarmerImage = document.createElement("img");
                    if (farmerType=="Red") newFarmerImage.src = `./image/resource/farmer1.png`;
                    else newFarmerImage.src = `./image/resource/farmer2.png`;
                    newFarmerImage.classList.add('farmfarmer');
                    farmboard.appendChild(newFarmerImage);
                }
            };
            farmboard.addEventListener("click", handleClick);
        });
    }

    // 가족 삭제
    removeFarmer() {
        const farmboards = document.querySelectorAll(".farmboard");
        farmboards.forEach(farmboard => {
            if (this.handleFarmerAddDelete) {
                farmboard.removeEventListener("click", this.handleFarmerAddDelete);
            }
            this.handleFarmerAddDelete = function () { //handleBarnAddDelete 수정
                const farmerImage = farmboard.querySelector(".farmfarmer");
                if (farmerImage) {
                    farmboard.removeChild(farmerImage);
                }
            };
            farmboard.addEventListener("click", this.handleFarmerAddDelete);
        });
    }

    // 집 올리기
    addRoom() {
        const farmboards = document.querySelectorAll(".farmboard");
        const roomType = document.querySelector("#room-type").value;
        farmboards.forEach(farmboard => {
            if (this.handleRoomAddDelete) {
                farmboard.removeEventListener("click", this.handleRoomAddDelete);
            }
            const handleClick = function () {
                const roomImage = farmboard.querySelector(".farmroom");
                if (!roomImage) {
                    const newRoomImage = document.createElement("img");
                    if (roomType=="Clay") newRoomImage.src = `./image/board/FarmBoard/clayroom.png`;
                    else if (roomType=="Wooden") newRoomImage.src = `./image/board/FarmBoard/woodenroom.png`;
                    else newRoomImage.src = `./image/board/FarmBoard/stoneroom.jpeg`;
                    newRoomImage.classList.add('farmroom');
                    farmboard.appendChild(newRoomImage);
                }
            };
            farmboard.addEventListener("click", handleClick);
        });
    }

    // 집 제거
    removeRoom() {
        const farmboards = document.querySelectorAll(".farmboard");
        farmboards.forEach(farmboard => {
            if (this.handleRoomAddDelete) {
                farmboard.removeEventListener("click", this.handleRoomAddDelete);
            }
            this.handleRoomAddDelete = function () { 
                const roomImage = farmboard.querySelector(".farmroom");
                if (roomImage) {
                    farmboard.removeChild(roomImage);
                }
            };
            farmboard.addEventListener("click", this.handleRoomAddDelete);
        });
    }

    // 집 바꾸기
    upgradeRoom() {
        const farmboards = document.querySelectorAll(".farmboard");
        const roomType = document.querySelector("#room-type").value;
        farmboards.forEach(farmboard => {
            if (this.handleRoomAddDelete) {
                farmboard.removeEventListener("click", this.handleRoomAddDelete);
            }
            const handleClick = function () {
                const roomImage = farmboard.querySelector(".farmroom");
                if (!roomImage) {
                    const newRoomImage = document.createElement("img");
                    if (roomType=="Wooden") newRoomImage.src = './image/board/FarmBoard/woodenroom.png';
                    else if (roomType="Stone") newRoomImage.src = './image/board/FarmBoard/stoneroom.jpeg';
                    newRoomImage.classList.add('farmroom');
                    farmboard.replaceChild(newRoomImage);
                }
            };
            farmboard.addEventListener("click", handleClick);
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

    // 스코어 보드 팝업 열기
    openScore(){
        document.getElementById("popup_score").style.display = "block";
    }

    // 스코어 보드 팝업 닫기
    closeScore(){
        document.getElementById("popup_score").style.display = "none";
    }

    // 점수 계산 > 나중에 scoreManager.js 등으로 따로 구현
    calcurateScore() {
      document.getElementById("score").insertAdjacentHTML('beforeend', `<p>10점</p>`);
    }


    showResource(game) {
        const player1 = game.gameManager.player1.resourceManager.resources;
        const player2 = game.gameManager.player2.resourceManager.resources;

        console.log(player1)
        console.log(player2)

        let farmercnt = 0;

        document.getElementById("player1score").innerHTML = game.gameManager.player1.calculateScore();
        document.getElementById("player2score").innerHTML = game.gameManager.player2.calculateScore();

        player1.forEach(element => {
            const element1 = document.getElementById(element.resourceType+"1")
            if(element1 !== null){
                element1.innerHTML = element.amount;
                if(element.resourceType+"1" === "farmer1"){
                    farmercnt += element.amount;
                    element1.innerHTML = farmercnt;
                }
            }
        });

        farmercnt = 0;

        player2.forEach(element => {
            const element2 = document.getElementById(element.resourceType+"2")
            if(element2 !== null){
                element2.innerHTML = element.amount;    
                if(element.resourceType+"2" === "farmer2"){
                    farmercnt += element.amount;
                    element2.innerHTML = farmercnt;
                }
            }
        });
    }

    // 농부 이동
    // move(){
    //     console.log("move");
    //     const farmboards = document.querySelectorAll('.farm_border')[0];
    //     farmboards.addEventListener('click', function(event) {
    //         let farmer_target = event.target.parentElement;

    //         if (farmer_target.matches('.farmboard')) {
    //             const farmer = farmer_target.querySelector('.farmfarmer');
    //             if (farmer) {
    //                 const actionboards = document.querySelector('.action_board_container');
    //                 actionboards.addEventListener('click', function(event) {
    //                     let action_target = event.target;
    //                     farmer_target.removeChild(farmer);

    //                     const newFarmerImage = document.createElement("img");
    //                     newFarmerImage.src = `./image/resource/farmer1.png`;
    //                     //if (farmerType=="Red") newFarmerImage.src = `./image/resource/farmer1.png`;
    //                     //else newFarmerImage.src = `./image/resource/farmer2.png`;
    //                     newFarmerImage.classList.add('farmfarmer');
    //                     action_target.appendChild(newFarmerImage);  
    //                 });
                    

    //             }
    //         }
    //     });
    // }
    async move(farmerType, turn) {
        const farmboards = document.querySelectorAll('.farm_border')[turn]
        let farmer = null
        let onClick = function() {}

        let farmboardPromise = new Promise((resolve) => {
            farmboards.addEventListener('click', function onClick(event) {
                farmer = clickFarmer(event)
                if (farmer) {
                    resolve(onClick)
                }
            })
        })

        onClick = await farmboardPromise

        let actionboardPromise = new Promise((resolve) => {
            farmboards.removeEventListener("click", onClick)
            const action_boards = document.querySelector('.action_board_container');
            action_boards.addEventListener('click', function onTap(event) {
                clickActionBoard(event, farmer, farmerType)
                this.removeEventListener('click', onTap)
                resolve();
            })
        })

        await actionboardPromise
    }
    
}

function clickFarmer(event) {
    const farm_board = event.target.parentElement
    if (farm_board.matches('.farmboard')) {
        const farmer = farm_board.querySelector('.farmfarmer');
        return farmer
    }
}

function clickActionBoard(event, farmer, farmerType) {

    const action_board = event.target
    const new_farmer = document.createElement('img')

    // 농부 style 입히기
    new_farmer.src = farmerType === 'Red' ? './image/resource/farmer1.png' : './image/resource/farmer2.png';
    new_farmer.style = `
        position: relative; 
        top: 50%; 
        left: 50%;
        transform: translate(-50%, -50%); 
        max-width: 100%;
    `
    new_farmer.classList.add('farmfarmer')

    // action 칸에 농부 추가
    action_board.appendChild(new_farmer)

    // farmboard에 있는 농부 제거
    farmer.remove();
}

export default UIManager;
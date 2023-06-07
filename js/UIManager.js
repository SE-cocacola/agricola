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

    // 마우스 오버 효과 추가
    addHoverEffectToDiv(divId) {
        // const div = document.getElementById(divId);
    
        // div.addEventListener("mouseover", function () {
        //     div.classList.add("hover-red");
        // });
        // div.addEventListener("mouseout", function () {
        //     div.classList.remove("hover-red");
        // });

        const farmBoard = document.querySelector('.farm_boards');
        const farmTiles = farmBoard.querySelectorAll('.farmboard');

        switch (divId) {
            case "r2":
                // Build Fence
                // 울타리가 설치되지 않은 모든 곳에 적용
                const fences = farmBoard.querySelectorAll('.row_bar, .col_bar');
                Array.from(fences)
                    .filter(fence => !fence.style.background)
                    .forEach((fence) => {
                        fence.addEventListener('mouseover', function () {
                                fence.classList.add('available-hover');
                        })
                        fence.addEventListener('mouseout', function () {
                            fence.classList.remove('available-hover');
                        });
                    })
                break;
            case "r4":
                // sheep
                // 울타리 고려해야되고, 외양간 고려해야되고
                // 우리(울타리로 싸인 공간) 1칸당 가축 두마리. 같은 가축만 가능.
                // 외양간은 * 2 마리 가능
                // 우리 없이 가축을 키울 시에는 외양간이 있어야함. 1마리만 가능.
                // 가축을 1마리 집에서 키울 수 있음.
                break;
            case "r6":
                // Upgrade House
                // 흙집(->나무집), 나무집(->돌집)이 설치된 모든 부분에 적용
                Array.from(farmTiles)
                    .filter(farmTile => {
                        return farmTile.querySelector('img')
                            .getAttribute('src')
                            .match(/^image\/board\/FarmBoard\/(woodenroom\.png|stoneroom\.jpeg)$/);
                    })
                    .forEach(farmTile => {
                        farmTile.addEventListener('mouseover', function () {
                            farmTile.classList.add('available-hover');
                        });
                        farmTile.addEventListener('mouseout', function () {
                            farmTile.classList.remove('available-hover');
                        });
                    });
                break;
            case "a1":
                // Expand House
                // 집은 원래 있던 집에 맞닿아있는 곳에만 설치 가능

                // 원래 있던 집 확인
                const houseNumbers = Array.from(farmTiles)
                    .filter(farmTile => {
                        return farmTile.querySelector('img')
                            .getAttribute('src')
                            .match(/^image\/board\/FarmBoard\/farmboard\d+\.png$/);
                    })
                    .map(farmTile => Number(farmTile.getAttribute('id').slice(1)));

                // 맨 처음 집이 왼쪽 아래에 설치되어 있으므로, 빈 타일을 기준으로 아래, 왼쪽만 확인하면 됨.
                Array.from(farmTiles)
                    .filter(farmTile => {
                        const tileNumber = Number(farmTile.getAttribute('id').slice(1));
                        // 맨 왼쪽이 아니라면, 왼쪽 확인
                        if(tileNumber !== 1 && tileNumber !== 6 && tileNumber !== 11 && houseNumbers.includes(tileNumber - 1)) return true;
                        // 맨 아래가 아니라면, 아래쪽 확인
                        if(tileNumber < 11 && houseNumbers.includes(tileNumber + 5)) return true;
                        // 아무것도 해당되지 않으면 false
                        return false;
                    })
                    .forEach(farmTile => {
                        farmTile.addEventListener('mouseover', function () {
                            farmTile.classList.add('available-hover');
                        });
                        farmTile.addEventListener('mouseout', function () {
                            farmTile.classList.remove('available-hover');
                        });
                    });
                break;
            case "a5":
                // 밭 일구기
                // 밭은 원래 있던 밭에 맞닿아있는 곳에만 설치 가능

                // 원래 있던 집 확인
                const farmLands = Array.from(farmTiles)
                    .filter(farmTile => {
                        return farmTile.querySelector('img')
                            .getAttribute('src')
                            .match(/field.png$/);
                    })
                    .map(farmTile => Number(farmTile.getAttribute('id').slice(1)));
                console.log(farmLands);

                // 밭은 상하좌우 모든곳을 고려해야 함
                Array.from(farmTiles)
                    .filter(farmTile => {
                        const tileNumber = Number(farmTile.getAttribute('id').slice(1));
                        // 맨 왼쪽이 아니라면, 왼쪽 확인
                        if(tileNumber !== 1 && tileNumber !== 6 && tileNumber !== 11 && farmLands.includes(tileNumber - 1)) return true;
                        // 맨 오른쪽이 아니라면, 오른쪽 확인
                        if(tileNumber !== 5 && tileNumber !== 10 && tileNumber !== 15 && farmLands.includes(tileNumber + 1)) return true;
                        // 맨 위쪽이 아니라면, 위쪽 확인
                        if(tileNumber > 5 && farmLands.includes(tileNumber - 5)) return true;
                        // 맨 아래가 아니라면, 아래쪽 확인
                        if(tileNumber < 11 && farmLands.includes(tileNumber + 5)) return true;
                        // 아무것도 해당되지 않으면 false
                        return false;
                    })
                    .forEach(farmTile => {
                        farmTile.addEventListener('mouseover', function () {
                            farmTile.classList.add('available-hover');
                        });
                        farmTile.addEventListener('mouseout', function () {
                            farmTile.classList.remove('available-hover');
                        });
                    });
                break;
            default:
                break;
        }
    }

    removeAllEventListenersFromFarmBoard() {
        const farmBoard = document.querySelector('.farm_boards');
        const clonedFarmBoard = farmBoard.cloneNode(true);

        farmBoard.parentNode.replaceChild(clonedFarmBoard, farmBoard);
    }


    // action_round의 background_img 바꾸기
    changeActionRoundImage(actionRound) {
        var action_round = actionRound.toString();
        action_round = 'r' + action_round;
        const actionRoundDiv = document.getElementById(action_round);
        actionRoundDiv.style = `
        background-repeat: no-repeat;
        background-size: 90% 85%;
        background-position: left center;
        transform: translate(-5px);
        `

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
    addFence(player, target_id) {

        const fence = document.getElementById(target_id);
        let color = (player.name == 0) ? "red" : "blue";
        fence.style.backgroundColor = color;

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
                    if (farmerType == "Red") newFarmerImage.src = `./image/resource/farmer1.png`;
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
                    if (roomType == "Clay") newRoomImage.src = `./image/board/FarmBoard/clayroom.png`;
                    else if (roomType == "Wooden") newRoomImage.src = `./image/board/FarmBoard/woodenroom.png`;
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
                    if (roomType == "wood") newRoomImage.src = './image/board/FarmBoard/clayroom.png';
                    else if (roomType = "clay") newRoomImage.src = './image/board/FarmBoard/stoneroom.jpeg';
                    newRoomImage.classList.add('farmroom');
                    farmboard.replaceChild(newRoomImage);
                }
            };
            farmboard.addEventListener("click", handleClick);
        });
    }

    majorCardPopUp(majorCardsName, isSelectable) {
        return new Promise((resolve) => {


            let majorCardsContainer = document.getElementById("major_cards_container");
            let cards = majorCardsContainer.getElementsByTagName("img");
            while (cards.length > 0) {
                cards[0].parentNode.removeChild(cards[0]);
            }

            for (let cardName of majorCardsName) {
                const majorCard = document.createElement('img');
                majorCard.setAttribute("id", cardName);
                majorCard.setAttribute("src", "image/utility/" + cardName + ".png");

                if (isSelectable) {
                    majorCard.addEventListener("click", function () {
                        let selectedCardId = this.getAttribute("id");
                        resolve(selectedCardId);
                        document.getElementById("popup_layer").style.display = "none";
                    });
                }

                majorCardsContainer.appendChild(majorCard);
            }

            document.getElementById("popup_layer").style.display = "block";

        });
    }


    // // 주요 설비 팝업(MajorCardManager)
    // majorCardPopUp(majorCardsName, isSelectable) {

    //     // major_cards_container에서 img태그가 있는 자식들 모두 제거
    //     let majorCardsContainer = document.getElementById("major_cards_container");
    //     let cards = majorCardsContainer.getElementsByTagName("img");
    //     while (cards.length > 0) {
    //         cards[0].parentNode.removeChild(cards[0]);
    //     }

    //     // 현재 남아있는 Major cards를 추가함
    //     for (let cardName of majorCardsName) {
    //         const majorCard = document.createElement('img');
    //         majorCard.setAttribute("id", cardName);
    //         majorCard.setAttribute("src", "image/utility/" + cardName + ".png");

    //         if(isSelectable){
    //             majorCard.addEventListener("click", function() {
    //                 let selectedCardName = this.getAttribute("id");
    //                 console.log("Selected Card ID: ", selectedCardName);
    //             });
    //         }

    //         majorCardsContainer.appendChild(majorCard);
    //     }

    //     document.getElementById("popup_layer").style.display = "block";
    // }

    // 주요설비 팝업 닫기
    closePopUp() {
        document.getElementById("popup_layer").style.display = "none";
    }

    // 선 선택 팝업
    openSelect() {
        document.getElementById("popup_select").style.display = "block";
    }

    // 선 선택 팝업 닫기
    closeSelect() {
        document.getElementById("popup_select").style.display = "none";
    }

    // 스코어 보드 팝업 열기
    openScore() {
        document.getElementById("popup_score").style.display = "block";
    }

    // 스코어 보드 팝업 닫기
    closeScore() {
        document.getElementById("popup_score").style.display = "none";
    }

    // 점수 계산 > 나중에 scoreManager.js 등으로 따로 구현
    calcurateScore() {
        document.getElementById("score").insertAdjacentHTML('beforeend', `<p>10점</p>`);
    }


    showResource(gameManager) {
        const player1 = gameManager.player1.resourceManager.resources;
        const player2 = gameManager.player2.resourceManager.resources;

        let farmercnt = 0;

        document.getElementById("player1score").innerHTML = gameManager.player1.calculateScore();
        document.getElementById("player2score").innerHTML = gameManager.player2.calculateScore();

        player1.forEach(element => {
            const element1 = document.getElementById(element.resourceType + "1")
            if (element1 !== null) {
                element1.innerHTML = element.amount;
                if (element.resourceType + "1" === "farmer1") {
                    farmercnt += element.amount;
                    element1.innerHTML = farmercnt;
                }
            }
        });

        farmercnt = 0;

        player2.forEach(element => {
            const element2 = document.getElementById(element.resourceType + "2")
            if (element2 !== null) {
                element2.innerHTML = element.amount;
                if (element.resourceType + "2" === "farmer2") {
                    farmercnt += element.amount;
                    element2.innerHTML = farmercnt;
                }
            }
        });
    }

    // 농부이동 
    // round에 따라서 갈수 없는 곳 체크
    async move(farmerType, turn, round) {
        const farmboards = document.querySelectorAll('.farm_border')[turn]
        let farmer = null
        let action_board_id = 0;
        let onClick = function () {
        }

        let farmboardPromise = new Promise((resolve) => {
            farmboards.addEventListener('click', function onClick(event) {
                farmer = clickFarmer(event)
                if (farmer) {
                    resolve(onClick)
                }
            })
        })

        onClick = await farmboardPromise
        // 여기서 제약조건
        let actionboardPromise = new Promise((resolve) => {
            farmboards.removeEventListener("click", onClick)
            
            const leftBoxes = document.querySelectorAll('.left_box');
            const rightBoxes = document.querySelectorAll('.right_box .round');
            let action_boards = [];
            let roundIds = [];
            let selectedRounds;

            leftBoxes.forEach((leftBox) => {
                action_boards.push(leftBox);
            });

            if(round >= 2){
                for(let i=2; i<=round; i++){
                    roundIds.push('r' + i);
                }
                selectedRounds = Array.from(rightBoxes).filter(element => roundIds.includes(element.id));
                action_boards.push(...selectedRounds);
            }

            action_boards.forEach((action_board) => {
                action_board.addEventListener('click', function onTap(event) {
                    clickActionBoard(event, farmer, farmerType)
                    this.removeEventListener('click', onTap)
                    resolve(event.target.id);
                })
            })
            
        })

        action_board_id = await actionboardPromise
        return action_board_id
    }


    // 라운드 끝나고 농부 이미지 지우기
    removeImages(className, srcPrefix) {
        const elements = document.getElementsByClassName(className);

        for (let i = elements.length - 1; i >= 0; i--) {
            const imageElements = elements[i].getElementsByTagName('img');
            for (let j = imageElements.length - 1; j >= 0; j--) {
                const imageSrc = imageElements[j].getAttribute('src');
                if (imageSrc.startsWith(srcPrefix)) {
                    imageElements[j].remove();
                }
            }
        }
    }

    // 농장 확장
    selectExpandFarm(playerName, roomType, tileManager) {
        let roomImg;
        switch (roomType) {
          case "wood":
            roomImg = "woodenroom.png";
            break;
          case "clay":
            roomImg = "clayroom.png";
            break;
          case "stone":
            roomImg = "stoneroom.jpeg";
            break;
          default:
            break;
        }

        // 아래 리스트통해서 클릭 되게 할거랑 안 되게 할거 정하기?
        let room = tileManager.roomPosition;
        let field = tileManager.fieldPosition;
        let pen = tileManager.penPosition;
      
        return new Promise((resolve) => {
          const boards = document.querySelectorAll(".farm_board" + playerName + " [id^='board']");
      
          const clickHandler = (event) => {
            // 다른 플레이어의 board 안 눌리게 하려면 boards에서 받아올 때 class 이름 다르게 해야함
            const board = event.currentTarget;
            const boardIdx = board.id;
            const boardElement = document.getElementById(boardIdx).querySelector("img");
            boardElement.src = "image/board/FarmBoard/" + roomImg;
            resolve(parseInt(boardIdx.substring(5), 10) - 1);
      
            // 클릭 후 board의 이벤트 리스너 제거
            boards.forEach((board) => {
              board.removeEventListener("click", clickHandler);
            });
          };
      
          boards.forEach((board) => {
            board.addEventListener("click", clickHandler);
          });
        });
      }

      // 밭 설치
    selectFarmLand(playerName, tileManager) {
        // 밭도 서로 붙여야하나? 잘 모르지만 두 개 이상 지을일 없을거같아서 필요없을듯
        // 그치만 room, field, pen이 이미 존재하면 안 눌리게는 해야함
        let room = tileManager.roomPosition;
        let field = tileManager.fieldPosition;
        let pen = tileManager.penPosition;

        return new Promise((resolve) => {
            const boards = document.querySelectorAll(".farm_board" + playerName + " [id^='board']");
            
            const clickHandler = (event) => {
              // 다른 플레이어의 board 안 눌리게 하려면 boards에서 받아올 때 class 이름 다르게 해야함
              const board = event.currentTarget;
              const boardIdx = board.id;
              const boardElement = document.getElementById(boardIdx).querySelector("img");
              boardElement.src = "image/board/FarmBoard/field.png";
              resolve(parseInt(boardIdx.substring(5), 10) - 1);
        
              // 클릭 후 board의 이벤트 리스너 제거
              boards.forEach((board) => {
                board.removeEventListener("click", clickHandler);
              });
            };
        
            boards.forEach((board) => {
              board.addEventListener("click", clickHandler);
            });
        });
    }  

    // 집 업그레이드
    upgradeHouse(playerName, roomType, roomPosition){
        let rooms;
        let roomImg;
        switch (roomType) {
          case "wood":
            roomImg = "clayroom.png";
            break;
          case "clay":
            roomImg = "stoneroom.jpeg";
            break;
          default:
            break;
        }
        if(playerName === "0"){
            roomPosition = roomPosition.map(value => value + 1);
        }else{
            roomPosition = roomPosition.map(value => value + 16);
        }

        rooms = roomPosition.map(value => "board" + value);
        rooms.forEach((room) =>{
            const boardElement = document.getElementById(room).querySelector("img");
            boardElement.src = "image/board/FarmBoard/" + roomImg;
        });
        
    }

    grainUtilization(playerName, emptyField){
        if(playerName === "0"){
            emptyField = emptyField.map(value => value + 1);
        }else{
            emptyField = emptyField.map(value => value + 16);
        }
        // [board0, board1]
        let fields = emptyField.map(value => ".farm_board" + playerName + " #board" + value);
        
        return new Promise((resolve) => {
            const boards = document.querySelectorAll(fields);

            const clickHandler = (event) => {
              const board = event.currentTarget;
              const boardIdx = board.id;
              const newCropImage = document.createElement("img");
                newCropImage.src = `./image/resource/bread.PNG`;
                newCropImage.classList.add('grain');
                board.appendChild(newCropImage);
              resolve(parseInt(boardIdx.substring(5), 10) - 1);
        
              // 클릭 후 board의 이벤트 리스너 제거
              boards.forEach((board) => {
                board.removeEventListener("click", clickHandler);
              });
            };
        
            boards.forEach((board) => {
              board.addEventListener("click", clickHandler);
            });
        });    
    }

    increaseFamily(playerName, emptyRoom){
        if(playerName === "0"){
            emptyRoom = emptyRoom.map(value => value + 1);
        }else{
            emptyRoom = emptyRoom.map(value => value + 16);
        }
        // [board0, board1]
        let rooms = emptyRoom.map(value => ".farm_board" + playerName + " #board" + value);
        console.log(rooms);
        return new Promise((resolve) => {
            const boards = document.querySelectorAll(rooms);

            const clickHandler = (event) => {
              const board = event.currentTarget;
              const boardIdx = board.id;
              const playerNameInteger = parseInt(playerName, 10) + 1;
              const newFarmerImage = document.createElement("img");
                newFarmerImage.src = `./image/resource/farmer${playerNameInteger}.png`;
                newFarmerImage.classList.add('farmer');
                board.appendChild(newFarmerImage);
              resolve(parseInt(boardIdx.substring(5), 10) - 1);
        
              // 클릭 후 board의 이벤트 리스너 제거
              boards.forEach((board) => {
                board.removeEventListener("click", clickHandler);
              });
            };
        
            boards.forEach((board) => {
              board.addEventListener("click", clickHandler);
            });
        }); 
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
        position: absolute; 
        top: 50%; 
        left: 50%;
        transform: translate(-50%, -50%); 
        max-width: 100%;
    `
    // if(action_board.id.startsWith('r')){
    //     const actionBoardId = parseInt(action_board.id.substr(1));
    //     if (actionBoardId <= round) {
    //         console.log(123);
    //         new_farmer.classList.add('farmfarmer')
    //         // action 칸에 농부 추가
    //         action_board.appendChild(new_farmer)

    //         // farmboard에 있는 농부 제거
    //         farmer.remove();
    //       }else{
    //         console.log(341);
    //           return 0;
    //       }
    // }else{
    //     new_farmer.classList.add('farmfarmer')
    //     // action 칸에 농부 추가
    //     action_board.appendChild(new_farmer)

    //     // farmboard에 있는 농부 제거
    //     farmer.remove();
    // }
    new_farmer.classList.add('farmfarmer')

    // action 칸에 농부 추가
    action_board.appendChild(new_farmer)

    // farmboard에 있는 농부 제거
    farmer.remove();

    return action_board.id
}

export default UIManager;

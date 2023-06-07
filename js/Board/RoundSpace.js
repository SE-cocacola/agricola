import RoomType from '../Tile/RoomType.js';
import BoardInterface from '../Board/BoardInterface.js';
import MajorCardManager from '../MajorCard/MajorCardManager.js';
import UIManager from '../UIManager.js';
import Game from '../Game.js';
import { RT } from '../Resource/ResourceType.js';

class BuildMajorFacility extends BoardInterface {
    constructor() {
        super("BuildMajorFacility");
    }

    // 자원 부족하면 획득 못하게 설정해야됨
    async behave(player, uiManager, majorCardManager) {
        // uiManager를 통해 클릭하면 그 majorCard의 name 받아와서 변수에 저장
        let majorCardsName = Object.keys(majorCardManager.cards);

        // majorCard를 클릭하면 그 클릭한 id 값을 cardName 변수에 저장
        let cardName = await uiManager.majorCardPopUp(majorCardsName, true);
        let card = majorCardManager.cards[cardName];
        const needResources = card.needResource;
        needResources.forEach((needResource) => {
            player.resourceManager.removeResource(needResource.resourceType, needResource.amount);
        });

        player.resourceManager.addMajorCard(cardName);
        majorCardManager.removeMajorCard(cardName);
        
        this.setActivate();
    }
}

class BuildFence extends BoardInterface {
    constructor() {
        super("BuildFence");
        this.active = true;
    }

    async behave(player, uiManager) {
        // 울타리 치기
        // uiManager hover
        uiManager.addHoverEffectToDiv("r2");

        document.getElementById('confirm').addEventListener('click', function() {
            // 변수 값을 변경
            this.active = false;
        });


        // const rowBars = document.querySelectorAll('.row_bar');
        // const colBars = document.querySelectorAll('.col_bar');
        // // row_bar 클래스를 가진 요소에 클릭 이벤트 리스너 등록
        // rowBars.forEach(function(element) {
        //     element.addEventListener('click', function(event) {
        //         target_id = event.target.id;
        //     });
        // });

        // // col_bar 클래스를 가진 요소에 클릭 이벤트 리스너 등록
        // colBars.forEach(function(element) {
        //     element.addEventListener('click', function(event) {
        //         target_id = event.target.id;
        //     });
        // });

        let target_id;
        
        while(player.resourceManager.resources[0].amount >= 1 && this.active) {
            const row_col_bars = player.name === 0 ? document.querySelector('.farm_board1') : document.querySelector('.farm_board0');
            
            let fencePromise = new Promise((resolve) =>{
                row_col_bars.addEventListener('click', function(event){
                    if(event.target.matches('.row_bar') || event.target.matches('col_bar')){
                        resolve(event.target.id);
                    }
                })
            });
            
            target_id = await fencePromise;
    
            // 버튼 읽어오고 가능한지 체크.
            await uiManager.addFence(player, target_id);
            player.resourceManager.resources[0].amount -= 1;

                
                //삭제는 어떻게 처리하지? 삭제하고싶으면?
                
        
        }

        uiManager.removeAllEventListenersFromFarmBoard();
        this.setActivate();
    }
}

class GrainUtilization extends BoardInterface {
    constructor() {
        super("GrainUtilization");
    }

    // 씨뿌리기
    behave(player, idx, crop) {
        //player.tileManager.fieldPostion을 돌면서 비어있는 필드 확인해야 되고
        // 클릭한 필드에 ......
        if (idx == Field && Field.isPlant === false) {
            Field.plantCrop(crop);
        };

        this.setActivate();
    }

    // 그리고,또는 빵 굽기
    bakeBread(player) {
        // major 카드가 있는지 확인하고, 어떤 카드인지도 확인해야 함.
    }
}

class AccumulateSheep extends BoardInterface {
    constructor() {
        super("AccumulateSheep");
        this.default = 1;
        this.cnt = 1;
    }

    behave(player, uiManager) {
        // // uiManager에서 어디를 선택할 수 있는지.
        // uiManager.addHoverEffectToDiv("r4");
        // if(/* 제약조건 */){
        //     player.resourceManager.addResource(RT.SHEEP, this.cnt);
        // }else{
        //     return;
        // }
        // uiManager.removeAllEventListenersFromFarmBoard();
        // this.setActivate();

        // uiManager에서 어디를 선택할 수 있는지.
        uiManager.addHoverEffectToDiv("r4");
        // if(/* 제약조건 */){
            player.resourceManager.addResource(RT.SHEEP, this.cnt);
        // }else{
        //     return;
        // }
        uiManager.removeAllEventListenersFromFarmBoard();
        this.setActivate();

    }

    increaseCnt() {
        this.cnt++;
    }
}

class IncreaseFamily extends BoardInterface {
    constructor() {
        super("IncreaseFamily");
    }

    // instanceOf: 객체 비교
    behave(player, idx) {
        if (type(player.tileManager.playerBoard[idx]) instanceof Room) {
            if (player.tileManager.playerBoard[idx].isEmpty) {
                player.tileManager.playerBoard[idx].isChild = true;
            }
        }

        this.setActivate();
    }
}

class UpgradeHouse extends BoardInterface {
    constructor() {
        super("UpgradeHouse");
    }

    async behave(player, uiManager) {
        const roomType = player.tileManager.roomType;
        const roomPosition = player.tileManager.roomPosition;
        switch (roomType) {
            case RoomType.WOOD:
                player.resourceManager.removeResource(RT.CLAY, roomPosition.length);
                player.resourceManager.removeResource(RT.REED, roomPosition.length);
                break;
            case RoomType.CLAY:
                player.resourceManager.removeResource(RT.STONE, roomPosition.length);
                player.resourceManager.removeResource(RT.REED, roomPosition.length);
                break;
            default:
                break;
        }

        await uiManager.upgradeHouse(player.name, roomType, roomPosition);
        player.tileManager.setRoomType();
        
        uiManager.removeAllEventListenersFromFarmBoard();
        this.setActivate();
    }
}

class AccumulateStone extends BoardInterface {
    constructor() {
        super("AccumulateStone");
        this.default = 1;
        this.cnt = 1;
    }

    behave(player) {
        player.resourceManager.addResource(RT.STONE, this.cnt);

        this.setActivate();
    }

    increaseCnt() {
        this.cnt++;
    }
}

export { BuildMajorFacility, BuildFence, GrainUtilization, AccumulateSheep, IncreaseFamily, UpgradeHouse, AccumulateStone };

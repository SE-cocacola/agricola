import RoomType from "../Tile/RoomType.js";
import Tile from "../Tile/Tile.js";

class Room extends Tile {
    constructor(roomType, adult) {
        // 방에 동물도 받아야됨
        super("room");
        this.roomType = roomType;
        this.adult = adult;
        this.isChild = false;
        // 아이가 존재하는지, 이 때는 new Room(타입, 0)으로 빈 방 생성 후 나중에 가족 늘리기 행동칸 가면 true로 바꾸고, 라운드가 끝나면 false로 바꾼 후 adult 추가??
    }

    roomUpgrade(roomType) {
        switch (roomType) {
          case RoomType.CLAY:
            this.roomType = RoomType.CLAY;
            break;
          case RoomType.STONE:
            this.roomType = RoomType.STONE;
            break;
          default:
            console.log("Invalid room type");
            break;
        }
    }

    // 가족 늘리기
    addChild(){
        this.isChild = true;
    }

    // 성인으로 바꾸기
    comeOfAge(){
        this.adult = 1;
        this.isChild = false;
    }
}

export default Room;
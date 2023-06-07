import RoomType from "../Tile/RoomType.js";
import Tile from "../Tile/Tile.js";

class Room extends Tile {
    constructor(roomType, adult) {
        // 방에 동물도 받아야됨
        super("room");
        this.roomType = roomType;
        this.adult = adult;
        this.isChild = false;
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
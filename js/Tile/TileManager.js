import Tile from "../Tile/Tile.js";
import RoomType from "../Tile/RoomType.js";
import Field from "../Tile/Field.js";
import Pen from "../Tile/Pen.js";
import Room from "../Tile/Room.js";

class TileManager {
    constructor() {
        this.playerBoard = [new Tile("empty"), new Tile("empty"), new Tile("empty"), new Tile("empty"), new Tile("empty"),
                            new Room(RoomType.WOOD, 1), new Tile("empty"), new Tile("empty"), new Tile("empty"), new Tile("empty"),
                            new Room(RoomType.WOOD, 1), new Tile("empty"), new Tile("empty"), new Tile("empty"), new Tile("empty")];

        this.roomType = RoomType.WOOD;

        this.roomPosition = [5, 10];
        this.fieldPosition = [];
        this.penPosition = [];
        this.fencePosition = [];
    }

    addField(position){
        this.playerBoard[position] = new Field();
        this.fieldPosition.push(position);
    }

    addPen(position){
        this.playerBoard[position] = new Pen();
        this.penPosition.push(position);
    }

    addRoom(position){
        this.playerBoard[position] = new Room(this.roomType, 0);
    }

    setRoomType(){
        switch (this.roomType) {
            case RoomType.WOOD:
              this.roomType = RoomType.CLAY;
              break;
            case RoomType.CLAY:
              this.roomType = RoomType.STONE;
              break;
            default:
              console.log("Invalid room type");
              break;
        }

        for(let i=0; i<this.roomPosition.length; i++){
            // 아이가 있을 때 집 추가될 수도 있어서 addRoom 하면 안되긴함
            this.playerBoard[this.roomPosition[i]].roomType = this.roomType;
        }
    }
}

export default TileManager;
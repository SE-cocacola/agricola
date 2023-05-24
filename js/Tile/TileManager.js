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
        this.playerBoard[position] = new Room(this.roomType, 1);
    }

    setRoomType(){
        for(let i=0; i<this.roomPosition.length; i++){
            this.playerBoard[this.roomPosition[i]].roomUpgrade(this.roomType);
        }
    }
}

export default TileManager;
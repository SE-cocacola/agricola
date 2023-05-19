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
    }

    addField(position){
        this.playerBoard[position] = new Field();
    }

    addPen(position){
        this.playerBoard[position] = new Pen();
    }

    addRoom(position){
        this.playerBoard[position] = new Room();
    }
}

export default TileManager;
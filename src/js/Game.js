import TileMap from "./TileMap";




const canvas = getElementById('gameCanvas');
const context = canvas.getContext('2d');
const tileMap = new TileMap()
function gameLoop() {

}

setInterval(gameLoop, 1000 / 75)

const TRACK_COLUMNS = 20;
const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_ROWS = 15;

const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
const TRACK_GOAL = 3;
const TRACK_TREE = 4;
const TRACK_FLAG = 5;

var levelOne =
       [4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
        4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
        4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
        1, 0, 0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 0, 0, 1,
        1, 0, 0, 5, 1, 0, 0, 1, 4, 4, 4, 4, 1, 0, 0, 0, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 0, 0, 1, 4, 4, 1, 0, 0, 0, 0, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 5, 0, 0, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
        1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 5, 0, 0, 1, 0, 0, 1, 0, 0, 1,
        1, 2, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1,
        1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
        1, 0, 3, 0, 0, 0, 1, 4, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
        1, 0, 3, 0, 0, 0, 1, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 4];



function carTrackHandling(whichCar) {
    var carTrackCol = Math.floor(whichCar.x/TRACK_W);
    var carTrackRow = Math.floor(whichCar.y/TRACK_H);
    var trackIndexUnderCar = rowColToArrayIndex(carTrackCol,carTrackRow)

    if(carTrackCol >= 0 && carTrackCol < TRACK_COLUMNS && carTrackRow >= 0 && carTrackRow < TRACK_ROWS){
        var tileHere = returnTitleTypeAtRowCol(carTrackCol , carTrackRow);

        if(tileHere == TRACK_GOAL) {
            console.log(whichCar.name + " WINS");
            loadLevel(levelOne);
        }
        else if(tileHere != TRACK_ROAD ) {
            whichCar.x -= Math.cos(whichCar.ang) * whichCar.speed;
            whichCar.y -= Math.sin(whichCar.ang) * whichCar.speed;

            whichCar.speed *= -0.5;
        }

    }
}

function drawTracks() {
    var arrayIndex = 0;
    var drawTileX = 0;
    var drawTileY = 0;
    for (var j = 0; j < TRACK_ROWS; j++) {
        for (var i = 0; i < TRACK_COLUMNS; i++) {
            var tileKindHere = trackGrid[arrayIndex];
            var useImg = trackPics[tileKindHere];
            canvasContext.drawImage(useImg ,drawTileX, drawTileY);
            drawTileX += TRACK_W;
            arrayIndex++;
        }
        drawTileX = 0;
        drawTileY += TRACK_H;
    }
}

function rowColToArrayIndex(col , row) {
    return TRACK_COLUMNS * row + col;
}

function returnTitleTypeAtRowCol(col,row) {
    if(col >= 0 && col < TRACK_COLUMNS && row >= 0 && row < TRACK_ROWS) {
        var trackIndexUnderCoord = rowColToArrayIndex(col, row);

        return trackGrid[trackIndexUnderCoord];
    } else {
        return TRACK_WALL;
    }
}
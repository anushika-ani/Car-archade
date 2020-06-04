
var canvas,canvasContext

var blueCar = new CarClass();
var greenCar = new CarClass();
window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d')

    clearScreen();
    colorText("LOADING IMAGES",canvas.width/2,canvas.height/2,'white');
    loadImages();

}

function imageLoadDone() {
    var framePerSecond = 30;
    setInterval(updateAll, 1000/framePerSecond);
    setupInput();
    loadLevel(levelOne);
}

function loadLevel(whichLevel) {
    trackGrid = whichLevel.slice();
    greenCar.reset(otherCarPic,"GREEN BAY");
    blueCar.reset(carPic,"BLUE MACHINE");
}
function updateAll(){
    moveAll();
    drawAll();
}

function moveAll() {
    blueCar.move();
    greenCar.move();
}

function clearScreen() {
    colorRect('black',0,0,canvas.width,canvas.height);
}

function drawAll() {
    drawTracks();
    blueCar.draw();
    greenCar.draw();
}


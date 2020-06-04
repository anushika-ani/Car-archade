var carPic = document.createElement("img");
var otherCarPic = document.createElement("img");
var trackPics = [];
var picsToLoad = 0;
function countLoadedImages() {
        picsToLoad--;
        if(picsToLoad == 0) {
            imageLoadDone();
        }
}

function beginLoadingImage(imgVar,fileName) {
    imgVar.onload = countLoadedImages();
    imgVar.src = "images/" +fileName;
}


function loadImageForTrackCode(trackCode , fileName) {
    trackPics[trackCode] = document.createElement("img");
    beginLoadingImage(trackPics[trackCode],fileName);
}
function loadImages() {
    var imageList = [
        {varName: carPic, fileName : "car.png"},
        {varName : otherCarPic, fileName:"car2.png"},
        {trackType : TRACK_WALL , fileName : "track_wall.png"},
        {trackType : TRACK_ROAD , fileName : "track_road.png"},
        {trackType: TRACK_FLAG, fileName : "track_flag.png"},
        {trackType: TRACK_TREE, fileName : "track_tree.png"},
        {trackType: TRACK_GOAL, fileName : "track_goal.png"}
    ]

    picsToLoad = imageList.length;

    for(var i=0;i<imageList.length;i++) {
        if(imageList[i].varName != undefined) {
            beginLoadingImage(imageList[i].varName, imageList[i].fileName);
        } else {
            loadImageForTrackCode(imageList[i].trackType , imageList[i].fileName);
        }
    }


}
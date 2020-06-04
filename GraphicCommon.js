function drawBitMapWithRotation(useBitmap , atX, atY , withAng) {
    canvasContext.save();
    canvasContext.translate(atX,atY);
    canvasContext.rotate(withAng);
    canvasContext.drawImage(useBitmap,-useBitmap.width/2,-useBitmap.height/2);
    canvasContext.restore();
}

function colorRect(drawColor,leftX,topY,height,width) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX,topY,height,width);
}

function colorCircle(drawColor,centerX,centerY,radius){
    canvasContext.fillStyle = 'white'
    canvasContext.beginPath();
    canvasContext.arc(centerX,centerY,radius,0,Math.PI*2,true);
    canvasContext.fill();
}

function colorText(showWords , textX , textY, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillText(showWords,textX,textY);
}



const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.06;
const MIN_SPEED_TO_TURN = 0.5;

function CarClass() {
    this.x = 75;
    this.speed = 0;
    this.ang = 0;
    this.y = 75;
    this.myCarPic;
    this.name = "untitled";
    this.keyHeld_Gas = false;
    this.keyHeld_Reverse = false;
    this.keyHeld_TurnLeft = false;
    this.keyHeld_TurnRight = false;

    this.controlKeyUp;
    this.controlKeyDown;
    this.controlKeyLeft;
    this.controlKeyRight;

    this.setupInput = function(upKey , rightKey, downKey, leftKey) {
        this.controlKeyUp = upKey;
        this.controlKeyDown = downKey;
        this.controlKeyLeft = leftKey;
        this.controlKeyRight = rightKey;
    }


    this.reset = function(whichImage, carName) {
        this.name = carName;
        this.myCarPic = whichImage;
        this.speed = 0;

        for (var j = 0; j < TRACK_ROWS; j++) {
            for (var i = 0; i < TRACK_COLUMNS; i++) {

                var arrayIndex = rowColToArrayIndex(i, j);
                if (trackGrid[arrayIndex] == TRACK_PLAYERSTART) {
                    trackGrid[arrayIndex] = TRACK_ROAD;
                    this.ang = - Math.PI / 2;
                    this.x = i * TRACK_W + TRACK_W/2;
                    this.y = j * TRACK_H + TRACK_H/2;
                    return;
                }
            }
        }
    }

    this.move = function() {
        this.speed *= GROUNDSPEED_DECAY_MULT;
        if (this.keyHeld_Gas) {
            this.speed += DRIVE_POWER;
        }

        if (this.keyHeld_Reverse) {
            this.speed -= REVERSE_POWER
        }

        if (Math.abs(this.speed) > MIN_SPEED_TO_TURN) {
            if (this.keyHeld_TurnLeft) {
                this.ang -= TURN_RATE;
            }

            if (this.keyHeld_TurnRight) {
                this.ang += TURN_RATE;
            }
        }

        this.x += Math.cos(this.ang) * this.speed;
        this.y += Math.sin(this.ang) * this.speed;

        carTrackHandling(this);
    }

    this.draw = function() {
        drawBitMapWithRotation(this.myCarPic, this.x, this.y, this.ang);
    }

}

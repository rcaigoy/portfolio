// Global variables
var counter; //used for timing purposes

var XPosition; //used for spacing purposes
var YPosition; //used for character jumping

var characterSprite;
var character;
var characterWalkFrames = [
    { 'name': 'player_walk01', 'frame': { 'x': 0, 'y': 400, 'width': 300, 'height': 400 } },
    { 'name': 'player_walk02', 'frame': { 'x': 300, 'y': 400, 'width': 300, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 600, 'y': 400, 'width': 300, 'height': 400 } },
    { 'name': 'player_walk04', 'frame': { 'x': 900, 'y': 400, 'width': 300, 'height': 400 } },
    { 'name': 'player_walk01', 'frame': { 'x': 0, 'y': 800, 'width': 300, 'height': 400 } },
    { 'name': 'player_walk02', 'frame': { 'x': 300, 'y': 800, 'width': 300, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 600, 'y': 800, 'width': 300, 'height': 400 } },
    { 'name': 'player_walk04', 'frame': { 'x': 900, 'y': 800, 'width': 300, 'height': 400 } },
];

var characterWaveFrames = [
    { 'name': 'player_walk01', 'frame': { 'x': 0, 'y': 1200, 'width': 300, 'height': 400 } },
    { 'name': 'player_walk01', 'frame': { 'x': 0, 'y': 1200, 'width': 300, 'height': 400 } },
    //{ 'name': 'player_walk01', 'frame': { 'x': 0, 'y': 1200, 'width': 300, 'height': 400 } },
    //{ 'name': 'player_walk01', 'frame': { 'x': 0, 'y': 1200, 'width': 300, 'height': 400 } },

    { 'name': 'player_walk02', 'frame': { 'x': 295, 'y': 1200, 'width': 300, 'height': 400 } },
    //{ 'name': 'player_walk02', 'frame': { 'x': 295, 'y': 1200, 'width': 300, 'height': 400 } },
    //{ 'name': 'player_walk02', 'frame': { 'x': 295, 'y': 1200, 'width': 300, 'height': 400 } },
    //{ 'name': 'player_walk02', 'frame': { 'x': 295, 'y': 1200, 'width': 300, 'height': 400 } },

    { 'name': 'player_walk03', 'frame': { 'x': 605, 'y': 1200, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 605, 'y': 1200, 'width': 301, 'height': 400 } },
    //{ 'name': 'player_walk03', 'frame': { 'x': 605, 'y': 1200, 'width': 301, 'height': 400 } },
    //{ 'name': 'player_walk03', 'frame': { 'x': 606, 'y': 1200, 'width': 301, 'height': 400 } },

    { 'name': 'player_walk02', 'frame': { 'x': 295, 'y': 1200, 'width': 300, 'height': 400 } },
    //{ 'name': 'player_walk02', 'frame': { 'x': 295, 'y': 1200, 'width': 300, 'height': 400 } },
    //{ 'name': 'player_walk02', 'frame': { 'x': 295, 'y': 1200, 'width': 300, 'height': 400 } },
    //{ 'name': 'player_walk02', 'frame': { 'x': 295, 'y': 1200, 'width': 300, 'height': 400 } },
]

var characterJumpFrames = [
    { 'name': 'player_walk01', 'frame': { 'x': 0, 'y': 1600, 'width': 300, 'height': 400 } },
    { 'name': 'player_walk01', 'frame': { 'x': 0, 'y': 1600, 'width': 300, 'height': 400 } },
    //{ 'name': 'player_walk01', 'frame': { 'x': 0, 'y': 1200, 'width': 300, 'height': 400 } },
    //{ 'name': 'player_walk01', 'frame': { 'x': 0, 'y': 1200, 'width': 300, 'height': 400 } },

    { 'name': 'player_walk02', 'frame': { 'x': 295, 'y': 1600, 'width': 300, 'height': 400 } },
    //{ 'name': 'player_walk02', 'frame': { 'x': 295, 'y': 1200, 'width': 300, 'height': 400 } },
    //{ 'name': 'player_walk02', 'frame': { 'x': 295, 'y': 1200, 'width': 300, 'height': 400 } },
    //{ 'name': 'player_walk02', 'frame': { 'x': 295, 'y': 1200, 'width': 300, 'height': 400 } },

    { 'name': 'player_walk03', 'frame': { 'x': 605, 'y': 1600, 'width': 301, 'height': 400 } },

]

var characterSaluteFrames = [
    { 'name': 'player_walk03', 'frame': { 'x': 600, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 600, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 600, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 600, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 600, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 600, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 600, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 600, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 600, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 600, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 600, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 600, 'y': 0, 'width': 301, 'height': 400 } },

    { 'name': 'player_walk03', 'frame': { 'x': 900, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 900, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 900, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 900, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 900, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 900, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 900, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 900, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 900, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 900, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 900, 'y': 0, 'width': 301, 'height': 400 } },
    { 'name': 'player_walk03', 'frame': { 'x': 900, 'y': 0, 'width': 301, 'height': 400 } },
]


var characterSpriteWave;
var characterWave;
var waveCounter;

var characterWalk;
var characterStand;

var characterPhone;
var phoneCounter;

var characterSpriteSalute;
var characterSalute;

var characterJump;
var characterSpriteJump
var inAir;
var inAirLocked;

var standCounter;
var jumpCounter;
var saluteCounter;

var characterJumpHold;

var bg1;
var mobileStreet;

var bg2;
var mobileLibrary;

var bg3;
var mobileWork

function preload() {
    characterSpriteWalk = loadSpriteSheet('/Processing/Pictures/RyanSprite.png', characterWalkFrames);
    characterWalk = loadAnimation(characterSpriteWalk);

    characterStand = loadAnimation(new SpriteSheet('/Processing/Pictures/Ryansprite.png',
        [{'name': 'player_stand', 'frame':{'x':0, 'y': 0, 'width': 300, 'height': 400}}]    
    ));

    characterPhone = loadAnimation(new SpriteSheet('/Processing/Pictures/Ryansprite.png',
        [{ 'name': 'player_stand', 'frame': { 'x': 300, 'y': 0, 'width': 300, 'height': 400 } }]
    ));

    characterSpriteWave = loadSpriteSheet('/Processing/Pictures/RyanSprite.png', characterWaveFrames);
    characterWave = loadAnimation(characterSpriteWave);

    characterSpriteJump = loadSpriteSheet('/Processing/Pictures/RyanSprite.png', characterJumpFrames);
    characterJump = loadAnimation(characterSpriteJump);

    characterJumpHold = loadAnimation(new SpriteSheet('/Processing/Pictures/Ryansprite.png',
        [{ 'name': 'player_walk03', 'frame': { 'x': 905, 'y': 1600, 'width': 301, 'height': 400 } } ]))

    characterSpriteSalute = loadSpriteSheet('/Processing/Pictures/RyanSprite.png', characterSaluteFrames);
    characterSalute = loadAnimation(characterSpriteSalute);

    bg1 = loadImage('/Processing/Pictures/SunnyBackgroundCut.jpeg');
    bg2 = loadImage('/Processing/Pictures/LibraryBackground.jpeg');

    mobileStreet = loadImage('/Processing/Pictures/StreetMobile.png');
    mobileWork = loadImage('/Processing/Pictures/WorkMobile.png');
    mobileLibrary = loadImage('/Processing/Pictures/LibraryMobile.png');
}

// Setup the Processing Canvas
function setup(){

    //load all items into picture
	var canvas = createCanvas(1200, 800);
	canvas.parent('canvas-holder');


    //setup character
	standCounter = 0;
	waveCounter = 0;
	jumpCounter = 40;
	YPosition = 3 * height / 4;
    character = createSprite(width/2, YPosition, 300, 400);
    character.addAnimation('walk', characterWalk);
    character.addAnimation('stand', characterStand);
    character.addAnimation('wave', characterWave);
    character.addAnimation('phone', characterPhone);
    character.addAnimation('jump', characterJump);
    character.addAnimation('jumpHold', characterJumpHold);
    character.addAnimation('salute', characterSalute);
    
    character.animation.frameDelay = 5;

    XPosition = 0;

    counter = 0;

    inAir = false;
    inAirLocked = false;

}//end of function setup(){}

// Main draw loop
function draw() {
    clear();

    //Character Sprites
    if (XPosition >= 0 && XPosition < 9000) {
        //mobileWork.resize(5076, 1100);
        image(mobileWork, -XPosition, 0);
    }
    else if (XPosition >= 9000 && XPosition < 15000) {
        background(bg2);
        mobileLibrary.resize(2384, 698);
        image(mobileLibrary, 12000 - XPosition, height / 2);
        image(mobileLibrary, 2384 + 12000 - XPosition, height / 2);
    }
    else if (XPosition >= 15000 && XPosition < 18000) {
        background(bg1);
        image(mobileStreet, 15000 - XPosition, 386);
    }
    else if (XPosition >= 18000) {
        XPosition = 0;
    }
    


    //animate sprite sheets
    drawSprites();

    counter++;

    if (!inAir) {
        if (keyIsDown(RIGHT_ARROW)) {
            XPosition += 12;
            character.mirrorX(1);
            character.changeAnimation('walk');

            standCounter = 0;
        }
        else if (keyIsDown(LEFT_ARROW) && XPosition > 0) {
            XPosition -= 12;
            character.mirrorX(-1);
            character.changeAnimation('walk');
            standCounter = 0;
        }
        else {
            if (standCounter < 240) {
                character.changeAnimation('stand');
                standCounter++;
                waveCounter = 0;
            }
            else if (waveCounter < 240) {
                character.changeAnimation('wave');
                waveCounter++;
                phoneCounter = 0;
            }
            else if (phoneCounter < 240) {
                character.changeAnimation('phone');
                phoneCounter++;
                saluteCounter = 0;
            }
            else if (saluteCounter < 100){
                character.changeAnimation('salute');
                characterSalute.goToFrame(0);
                saluteCounter++;
            }
            else {
                standCounter = 0;
            }
        }
    }
    else {
        if (jumpCounter > 10) {
            characterJump.goToFrame(0);
            character.changeAnimation('jump');
        }
        else {
            character.changeAnimation('jumpHold');
        }
        if (keyIsDown(RIGHT_ARROW)) {
            XPosition += 12;
            character.mirrorX(1);
            //character.changeAnimation('walk');

            standCounter = 0;
        }
        else if (keyIsDown(LEFT_ARROW) && XPosition > 0) {
            XPosition -= 12;
            character.mirrorX(-1);
            //character.changeAnimation('walk');
            standCounter = 0;
        }
        
    }

    if (inAir) {
        jump();
    }

    if (XPosition < 0) {
        XPosition = 0;
    }


}//end of function draw(){}

function keyPressed(){
    if (keyCode === 74 || keyCode === 106 || keyCode === 32 && !inAirLocked) {
        inAir = true;
        //alert('hello');
    }
}

function jump() {
    if (jumpCounter > 20) {
        inAirLocked = true;
    }
    else if (jumpCounter > 0 && jumpCounter <= 20) {
        character.velocity.y = -15;
    }
    else if (jumpCounter <= 0 && jumpCounter > -20) {
        character.velocity.y = 10;

    }
    else if (jumpCounter <= -15) {
        character.velocity.y = 0;
        inAir = false;
        inAirLocked = false;
        jumpCounter = 30;
        character.position.y = YPosition;
    }
    jumpCounter--;
    standcounter = 0;
}




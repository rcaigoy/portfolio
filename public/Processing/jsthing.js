// Global variables
var counter; //used for timing purposes

var XPosition; //used for spacing purposes
var YPosition; //used for character jumping

//Character Information
var CharacterSpeed = 12;
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


//Level 1 Work
var mobileWork

//Level 2 Library
var bg2;
var mobileLibrary;

//Level 3 Freelance
var bg3;
var mobileStreet;


function preload() {

    //Character preload
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

    //Level 1 Work
    mobileWork = loadImage('/Processing/Pictures/WorkMobile.png');

    //Level 2 Library
    bg2 = loadImage('/Processing/Pictures/LibraryBackground.jpeg');
    mobileLibrary = loadImage('/Processing/Pictures/LibraryMobile.jpg');

    //Level 3 Freelance
    bg3 = loadImage('/Processing/Pictures/SunnyBackgroundCut.jpeg');
    mobileStreet = loadImage('/Processing/Pictures/StreetMobile.png');

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

    //Levels
    //Level 1
    if (XPosition >= 0 && XPosition < 9000) {
        //mobileWork.resize(5076, 1100);
        image(mobileWork, -XPosition, 0);
    }
    //Level2
    else if (XPosition >= 9000 && XPosition < 12000) {
        background(bg2);
        mobileLibrary.resize(2384, 500);
        image(mobileLibrary, 9000 - XPosition, height*2/5);
        image(mobileLibrary, 11384 - XPosition, height*2/5);
    }
    else if (XPosition >= 12000 && XPosition <= 21000) {
        background(bg3);
        image(mobileStreet, 12000 - XPosition, height-223);
    }
    else if (XPosition > 21000) {
        XPosition = 21000;
        background(bg3);
        image(mobileStreet, 12000 - XPosition, height-223);
    }
    
    


    //animate sprite sheets
    drawSprites();

    counter++;

    if (!inAir) {
        if (keyIsDown(RIGHT_ARROW)) {
            XPosition += CharacterSpeed;
            character.mirrorX(1);
            character.changeAnimation('walk');
            //Moon walk if M pressed
            if (keyCode == 109 || keyCode == 77){
                character.mirrorX(-1);
            }
            standCounter = 0;
        }
        else if (keyIsDown(LEFT_ARROW) && XPosition > 0) {
            XPosition -= CharacterSpeed;
            character.mirrorX(-1);
            character.changeAnimation('walk');
            //Moon walk if M pressed
            if (keyCode == 109 || keyCode == 77){
                character.mirrorX(1);
            }
            standCounter = 0;
        }
        else if (keyCode == 119 || keyCode == 87){
            character.changeAnimation('wave');
            standCounter = 0;
        }
        else if (keyCode == 112 || keyCode == 80){
            character.changeAnimation('phone');
            standCounter = 0;
        }
        else if (keyCode == 115 || keyCode == 83){
            character.changeAnimation('salute');
            standCounter = 0;
        }
        else {
            if (standCounter < 120) {
                character.changeAnimation('stand');
                standCounter++;
                waveCounter = 0;
            }
            else if (waveCounter < 180) {
                character.changeAnimation('wave');
                waveCounter++;
                phoneCounter = 0;
            }
            else if (phoneCounter < 180) {
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
            XPosition += CharacterSpeed;
            character.mirrorX(1);

            standCounter = 0;
        }
        else if (keyIsDown(LEFT_ARROW) && XPosition > 0) {
            XPosition -= CharacterSpeed;
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




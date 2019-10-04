// Global variables
var Rects;
var e;
var audio;
var sameClick = false; //prevents hold issue
var playOnce = false; //prevents multiple same sounds.
var soundType = "piano";
var pianoImage;
var chosenNote = "z";
var mainNote;

var reloader;

var allNotes = [
	"3Gs",
	"3A",
	"3Bb",
	"3B",
	"4C",
	"4Cs",
	"4D",
	"4Eb",
	"4E",
	"4F",
	"4Fs",
	"4G"
];

var audioStrings = new Array(12);
var audios = new Array(12);

function preload(){
	//audio = loadSound('soundfile.mp3');
	pianoImage = loadImage('pianokeys.jpg');

	for (var i = 0; i < allNotes.length; i++)
	{
		audioStrings[i] = soundType+'/'+allNotes[i]+".wav";
	}

	//load audio files
	for (var i = 0; i < 12; i++)
	{
		console.log(audioStrings[i]);
		audios[i] = loadSound(audioStrings[i]);
	}

}

// Setup the Processing Canvas
function setup(){

	var canvas = createCanvas(800, 800);
	canvas.parent('pitch-perfect');

	reloader = new Reloader(50, 50, 100, 100);

	imageMode(CENTER);
  	
  	ellipseX = 0;
	ellipseY = 0;
	right = true;

	var game = new GameMaker();
	//console.log("starting note is " + game.mainNote);

	Rects = [
		new RectButton(width*25/100, height*25/100, 100, 100, game.notes[0]),
		new RectButton(width*625/1000, height*25/100, 100, 100, game.notes[1]),
		new RectButton(width*25/100, height*500/1000, 100, 100, game.notes[2]),
		new RectButton(width*625/1000, height*500/1000, 100, 100, game.notes[3])
	];

	e = new EllipseButton(width/2, height/8, 150, 150, game.mainNote);
	//song.loop();
	//audio.play();

}//end of function setup(){}

// Main draw loop
function draw(){

	background(199, 137, 244);


	var i;
	//run squares
	for (i = 0; i < Rects.length; i++)
	{
		Rects[i].draw();
	}

	//run ellipse drawing
	e.draw();

	//display piano
	image(pianoImage, width/2, height*85/100);
	pianoImage.resize(600, 200);

	//console.log(chosenNote.toString());
	//console.log(e.note.toString())

	if (chosenNote == mainNote.toString())
	{
		//console.log("you win!");
		textSize(128);
		textAlign(CENTER);
		fill(0, 255, 0);
		text("You Win!", width/2, height/5);
	}
	else if (chosenNote != "z")
	{
		textSize(96);
		textAlign(CENTER);
		fill(255, 0, 0);
		text("Nope, Sorry!", width/2, height/5);
	}

	reloader.draw();


}//end of function draw(){}


// Set circle's next destination
function mouseMoved(){

}//end of function mouseMoved(){}


class RectButton {

	constructor (_x, _y, _width, _height, _note) {

		this.x = _x;
		this.y = _y;
		this.width = _width;
		this.height = _height;
		this.rightEnd = this.x+_width;
		this.bottomEnd = this.y+_height;
		this.note = _note;
	}

	draw(){
		
		
		if (mouseIsPressed)
		{
			if(mouseX > this.x && mouseX < this.rightEnd
			&&	mouseY > this.y && mouseY < this.bottomEnd)
			{
				
				fill(0, 255, 0);
				
				if(!sameClick)
				{
					console.log(this.note.toString());
					chosenNote = this.note;
					sameClick = true;
				}
			}
			else
			{
				//sameClick = false;
				fill (47, 68, 163);
			}


		}//end of if(mouseIsPressed)
		else
		{
			sameClick = false;
			fill (47, 68, 163);
		}
		
		rect(this.x, this.y, this.width, this.height);

		textSize(32);
		fill(0);
		var boxnote = this.note.toString().substring(1, this.note.toString().length)
		text( boxnote, this.x+30, this.y+50);

		}//end of draw(){

}//end class RectButton


class EllipseButton {
	constructor(_x, _y, _width, _height, _note) {
		this.x = _x;
		this.y = _y;
		this.width = _width;
		this.height = _height;
		this.note = _note;
	}

	draw() {	
		if (mouseIsPressed){
			let d = dist(mouseX, mouseY, this.x, this.y);
			if (d < this.width/2)
			{

				//console.log(d, mouseX, mouseY, this.x, this.y);
				if(!sameClick)
				{
					sameClick = true;
					//console.log("ellipse", this.note);
					//console.log(mainNote.toString());
					if(!audio.isPlaying())
					{
						for(var i = 0; i < allNotes.length; i++)
						{
							if (audioStrings[i] == mainNote.toString())
							{
								audio = audios[i];
							}
						}
						audio.play();
					}
					else
					{
						audio.stop();
					}
				}
				
				fill(0, 255, 0);
			}//end if (d < 100);
			else{
				fill(242, 181, 228);
			}
		}//end if (mouseIsPressed)
		else
		{
			sameClick = false;
			fill(242, 181, 228);
		}
		
		ellipse(this.x, this.y, this.width, this.height);
		textAlign(CENTER);
		textSize(24);
		fill(0);
		text('Play Note', this.x, this.y);

	}//end of draw(){
}//end class EllipseButton {

class Reloader {
	constructor(_x, _y, _width, _height, _note) {
		this.x = _x;
		this.y = _y;
		this.width = _width;
		this.height = _height;
		this.note = _note;
	}

	draw() {	
		if (mouseIsPressed){
			let d = dist(mouseX, mouseY, this.x, this.y);
			if (d < this.width/2)
			{

				//console.log(d, mouseX, mouseY, this.x, this.y);
				if(!sameClick)
				{
					sameClick = true;
					//console.log("ellipse", this.note);
					//console.log(mainNote.toString());
					location.reload();
					
				}//end if(!sameClick)
				
				fill(0, 255, 0);
			}//end if (d < 100);
			else{
				fill(85, 244, 228);
			}
		}//end if (mouseIsPressed)
		else
		{
			sameClick = false;
			fill(85, 244, 228);
		}
		ellipse(this.x, this.y, this.width, this.height);
		textSize(16);
		fill(0);
		textAlign(CENTER);
		text('Play Again', this.x, this.y);

	}//end of draw(){
}//end class Reloader {

class GameMaker{
	constructor(_folder){
		this.folder = _folder;
		this.notes = new Array(4);
		for (var i = 0; i < 4; i++)
		{
			this.notes[i] = allNotes.splice(Math.floor(Math.random()*allNotes.length), 1);
		}

		var random = Math.floor(Math.random() * 4);
		//console.log("main note = " + this.notes[random]);
		mainNote = this.notes[random];
		audio = loadSound(soundType + "/" + mainNote + ".wav");
		//audio = soundType+"/"+
	}

}//end class GameMaker{

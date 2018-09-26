//L-59
let gamestate;
let player;
let village;

function setup() {
	//Configure
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
	fullscreen();

	//Initialize vars
	gamestate = "player"; //player, village, intro?
	player = new Player();
	village = new Village();

	// Intro sequence?
}

function draw() {
	background(51);

	if (gamestate == "player") {
		player.render();
		player.move();
 	}

	if (gamestate == "village") {
		village.render();
	}
}

//Gamestate handlers --> probably depricate to util

function toggleGamestate() {
	console.log("Made it in check");

	if(gamestate == "player") {
		gamestate == "village";
		return;
	} else { 
		gamestate == "player";
		return;
	}
}

function keyPressed() {
  if(keyCode == 32) { toggleGamestate(); }
}

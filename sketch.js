//L-59
let gamestate;
let player;
let village;
let coins = [];
let font;

function setup() {
	//Configure
	var cnv = createCanvas(windowWidth, windowHeight);
	cnv.style('display', 'block');
	frameRate(60);

	//Initialize vars
	gamestate = "player"; //player, village, intro?
	player = new Player();
	village = new Village();
	initCoins();


	// Intro sequence?
}

function windowResized() { resizeCanvas(windowWidth, windowHeight); }

function draw() {
	background(51);

	if (gamestate == "player") {
		player.render();
		player.move();
		renderCoins();
 	}

	if (gamestate == "village") {
		village.render();
	}
}



//Coin Helpers
function initCoins() {
	for(var i = 0; i < 99; i++) {
		coins[i] = new Coin(random(5), random(0, windowWidth), random(0, windowHeight));
	}
}

function renderCoins() {
	for(var i = 0; i < 10; i++) {
		coins[i].render();
	}
}

//Gamestate handlers --> probably depricate to util

function toggleGamestate() {
	if(gamestate == "player") {
		gamestate = "village";
		return;
	} else if (gamestate == "village") {
		gamestate = "player";
		return;
	}
}

function keyPressed() {
  if(keyCode == 32) { toggleGamestate(); }
}

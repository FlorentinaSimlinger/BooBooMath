var gameSettings = {
	playerSpeed: 100,
}


// test commit


var config = {
	type: Phaser.auto,
	width: 750,
	height: 500,
	scene:[LoadGame, PlayGame],
	pixelArt: true,
	physics: {
		default: "arcade",
		arcade: {
			debug: false
		}
	}
}

window.onload = function() {
	var game = new Phaser.Game(config);
};


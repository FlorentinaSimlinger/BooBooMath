
window.onload = function() {
	var game = new Phaser.Game();
};

var config = {
	//type: Phaser.auto,
	width: 500, 
	height: 500,
	scene:[LoadGame, PlayGame]
}
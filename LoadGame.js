class LoadGame extends Phaser.Scene {
	constructor() {
		super("bootGame");
	}

	preload() {
		this.load.image("background", "assets/images/space_background.gif");
		
	}

	create() {
		this.add.text(20, 20, "Loading game...");
		this.scene.start("playGame");
	}

	
}
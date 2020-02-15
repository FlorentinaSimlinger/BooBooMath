class PlayGame extends Phaser.Scene {
	constructor() {
		super("playGame");
	}

		create() {
		this.add.text(20, 20, "Playing game...");
		this.background = this.add.image(0,0,"background");
		this.background.setOrigin(0,0);
	}
}
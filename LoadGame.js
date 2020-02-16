class LoadGame extends Phaser.Scene {
	constructor() {
		super("bootGame");
	}

	preload() {
		this.load.image("background", "assets/images/space_background_resized.png");
		this.load.image("star", "assets/images/star.png");
		//this.load.image("asteroid", "assets/images/asteroid.png");

		this.load.spritesheet("explosion", "assets/images/spritesheets/explosion.png", {
			frameWidth: 16,
			frameHeight: 16
		});

		// this.load.spritesheet("asteroid", "assets/images/asteriod.png", {
		// 	frameWidth: 16,
		// 	frameHeight: 16
		// });

		this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");

		// new edits:
		this.load.spritesheet("ghost", "assets/images/spritesheets/ghost.png", {
			frameWidth: 64, 
			frameHeight: 64
		});

		this.load.spritesheet("pacman", "assets/images/source/pacman_2.png", {
			frameWidth: 32, 
			frameHeight: 32
		});


		this.load.spritesheet("one", "assets/images/numbers/pixel_1.png", {
			frameWidth: 30,
			frameHeight: 34
		});
		this.load.image("two", "assets/images/numbers/pixel_2.png", {
			frameWidth: 30,
			frameHeight: 34
		});
		this.load.image("three", "assets/images/numbers/pixel_3.png", {
			frameWidth: 30,
			frameHeight: 34
		});
		this.load.image("four", "assets/images/numbers/pixel_4.png", {
			frameWidth: 30,
			frameHeight: 34
		});
		this.load.image("five", "assets/images/numbers/pixel_5.png", {
			frameWidth: 30,
			frameHeight: 34
		});
		this.load.image("six", "assets/images/numbers/pixel_6.png", {
			frameWidth: 30,
			frameHeight: 34
		});
		this.load.image("seven", "assets/images/numbers/pixel_7.png", {
			frameWidth: 30,
			frameHeight: 34
		});
		this.load.image("eight", "assets/images/numbers/pixel_8.png", {
			frameWidth: 30,
			frameHeight: 34
		});
		this.load.image("nine", "assets/images/numbers/pixel_9.png", {
			frameWidth: 30,
			frameHeight: 34
		});
		this.load.image("zero", "assets/images/numbers/pixel_0.png", {
			frameWidth: 30,
			frameHeight: 34
		});

		this.load.image("plus", "assets/images/numbers/plus.png", {
			frameWidth: 30,
			frameHeight: 30
		});
		this.load.image("minus", "assets/images/numbers/minus.png", {
			frameWidth: 30,
			frameHeight: 30
		});
		this.load.image("multiplies", "assets/images/numbers/multiplies.png", {
			frameWidth: 30,
			frameHeight: 30
		});
		this.load.image("divides", "assets/images/numbers/division.png", {
			frameWidth: 30,
			frameHeight: 30
		});

	}

	create() {
		//this.add.text(20, 20, "Loading game...");
		this.scene.start("playGame");

		this.anims.create({
			key: "explode",
			frames: this.anims.generateFrameNumbers("explosion"),
			frameRate: 20,
			repeat: 0,
			hideOnComplate: true
		});


		this.anims.create({
			key: "asteriod_roate",
			frames: this.anims.generateFrameNumbers("asteroid"),
			frameRate: 20, 
			repeat: -1
		});


		this.anims.create({
			key: "ghost_anim_upset",
			frames: this.anims.generateFrameNumbers("ghost", {
				start: 0,
				end: 1
			}),
			frameRate: 1,
			repeat: -1
		});

		this.anims.create({
			key: "pacman_right",
			frames: this.anims.generateFrameNumbers("pacman", {
				start: 0,
				end: 2
			}),
			frameRate: 8,
			repeat: -1
		});

		this.anims.create({
			key: "pacman_left",
			frames: this.anims.generateFrameNumbers("pacman", {
				start: 3,
				end: 5
			}),
			frameRate: 8,
			repeat: -1
		});

		this.anims.create({
			key: "pacman_up",
			frames: this.anims.generateFrameNumbers("pacman", {
				start: 6,
				end: 9
			}),
			frameRate: 8,
			repeat: -1
		});

		this.anims.create({
			key: "pacman_down",
			frames: this.anims.generateFrameNumbers("pacman", {
				start: 10,
				end: 22
			}),
			frameRate: 8,
			repeat: -1
		});

	}	
}
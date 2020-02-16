class PlayGame extends Phaser.Scene {
	constructor() {
		super("PlayGame");
	}

	create() {
		this.background = this.add.tileSprite(0, 100, config.width, config.height-50, "background");
		this.add.text(575, 25, "Playing game...");
		this.background.setOrigin(0,0);
        this.soundFX = this.sound.add('music', {loop: 'true'});
        this.soundFX.play();

        this.input.keyboard.on("keydown_P", function(e){
        if(this.soundFX.isPlaying) this.soundFX.pause();
        else this.soundFX.resume();
        }, this);

		this.score = Phaser.Math.Between(0, 20);
		this.n1 = 0;
		this.n2 = 0;
		this.op = "";
		this.result = 0;

		this.operators = ["plus", "minus", "multiplies", "divides"];

		//this.star = this.add.image(config.width/2, config.height/2, "star");


		this.ghost = this.add.sprite(75, 420, "ghost");
		this.ghost.play("ghost_anim_upset");

		// this.ship1.setInteractive();
		// this.ship2.setInteractive();
		// this.ship3.setInteractive();

		//this.input.on('gameobjectdown', this.destroyShip, this);

		this.placeNumbers();

		this.asteriods = this.physics.add.group();

		var maxObjects = 4;
		for (var i=0;i <= maxObjects; i++) {
			var asteriod = this.physics.add.image(16,16, "star");
			this.asteriods.add(asteriod);
			asteriod.setRandomPosition(0,0, config.width, config.height);

			//asteriod.play("asteriod_rotate");

			asteriod.setVelocity(100,100);
			asteriod.setCollideWorldBounds(true);
			asteriod.setBounce(1);
		}

		this.pacman = this.physics.add.sprite(config.width/2, config.height/2, "pacman");
		this.pacman.play("pacman_right");


		//keyboard inputs
		this.cursorKeys = this.input.keyboard.createCursorKeys();
		this.pacman.setCollideWorldBounds(true);

		this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		this.physics.add.collider(this.pacman, this.asteriods);

		//this.physics.add.overlap(this.pacman, this.asteriods, this.asteriods, null, this);
		this.physics.add.overlap(this.pacman, this.numbers, this.pickNumbers, null, this);

//        this.input.keyboard.on('keydown', function(event) {
//            if(event.key == 'Enter') {
//                this.soundFX.pause();
//                this.scene.start("QuitGame");
//            }
    }



	placeNumbers() {

		this.numbers = this.physics.add.group();

		var one = this.physics.add.sprite(30, 34, "one");
		var two = this.physics.add.sprite(30, 34, "two");
		var three = this.physics.add.sprite(30, 34, "three");
		var four = this.physics.add.sprite(30, 34, "four");
		var five = this.physics.add.sprite(30, 34, "five");
		var six = this.physics.add.sprite(30, 34, "six");
		var seven = this.physics.add.sprite(30, 34, "seven");
		var eight = this.physics.add.sprite(30, 34, "eight");
		var nine = this.physics.add.sprite(30, 34, "nine");
		var zero = this.physics.add.sprite(30, 34, "zero");

		var plus = this.physics.add.sprite(30, 30, "plus");
		var minus = this.physics.add.sprite(30, 30, "minus");
		var multiplies = this.physics.add.sprite(30, 30, "multiplies");
		var divides = this.physics.add.sprite(30, 30, "divides");

		this.numbers.add(one);
		this.numbers.add(two);
		this.numbers.add(three);
		this.numbers.add(four);
		this.numbers.add(five);
		this.numbers.add(six);
		this.numbers.add(seven);
		this.numbers.add(eight);
		this.numbers.add(nine);
		this.numbers.add(zero);

		this.numbers.add(plus);
		this.numbers.add(minus);
		this.numbers.add(multiplies);
		this.numbers.add(divides);

		var num_sca = 0.75;

		zero.setScale(num_sca);
		one.setScale(num_sca);
		two.setScale(num_sca);
		three.setScale(num_sca);
		four.setScale(num_sca);
		five.setScale(num_sca);
		six.setScale(num_sca);
		seven.setScale(num_sca);
		eight.setScale(num_sca);
		nine.setScale(num_sca);

		// plus.setScale(num_sca);
		// minus.setScale(num_sca);
		// multiplies.setScale(num_sca);
		// divides.setScale(num_sca);

		one.setRandomPosition(50,50, config.width-50, config.height-100);
		two.setRandomPosition(50,50, config.width-50, config.height-100);
		three.setRandomPosition(50,50, config.width-50, config.height-100);
		four.setRandomPosition(50,50, config.width-50, config.height-100);
		five.setRandomPosition(50,50, config.width-50, config.height-100);
		six.setRandomPosition(50,50, config.width-50, config.height-100);
		seven.setRandomPosition(50,50, config.width-50, config.height-100);
		eight.setRandomPosition(50,50,config.width-50, config.height-100);
		nine.setRandomPosition(50,50, config.width-50, config.height-100);
		zero.setRandomPosition(50,50, config.width-50, config.height-100);

		plus.setRandomPosition(50,50, config.width-50, config.height-100);
		minus.setRandomPosition(50,50, config.width-50, config.height-100);
		multiplies.setRandomPosition(50,50, config.width-50, config.height-100);
		divides.setRandomPosition(50,50, config.width-50, config.height-100);
	}

	pickNumbers(player, number) {
		number.disableBody(true, true);
		if (this.operators.includes(number.key)) {
			this.op = this.getValue(number);
			this.updateResult();
		} else {
			this.n1 = this.getValue(number);
			this.updateResult();
			this.n2 = this.n1;
		}
	}

	getValue(number) {
		if (number.key == "one") {
			return 1;
		} else if (number.key == "two") {
			return 2;
		} else if (number.key == "three") {
			return 3;
		} else if (number.key == "four") {
			return 4;
		} else if (number.key == "five") {
			return 5;
		} else if (number.key == "six") {
			return 6;
		} else if (number.key == "seven") {
			return 7;
		} else if (number.key == "eight") {
			return 8;
		} else if (number.key == "nine") {
			return 9;
		} else if (number.key == "zero") {
			return 0;
		} //else {

		//}

		console.log(number.key);
	}

	updateResult() {
		if (this.op == "") {
			this.result = this.n1;
		} else {
			if (this.op == "plus") {
				this.result = this.result + this.n1;
			} else if (this.op == "minus") {
				this.result = this.result - this.n1;
			} else if (this.op == "multiplies") {
				this.result = this.result * this.n1;
			} else if (this.op == "divides") {
				this.result = this.result / this.n1;
			}
		}
		console.log(this.score);
		console.log(this.n1);
		console.log(this.result);
	}

	moveStar(star, speed) {
		star.y += speed;
		if (star.y > config.height) {
			this.resetStarPos(star);
		}
	}

	resetStarPos(star) {
		star.y = 0;
		var randomX = Phaser.Math.Between(0, config.width);
		star.x = randomX;
	}

	moveGhost(ghost, speed) {
		var random = Phaser.Math.Between(-1, 1);
		ghost.y += (random * speed);
		ghost.x += (random * speed);
	}


	// destroyShip(pointer, gameObject) {
	// 	gameobjectdown.setTexture("explosion");
	// 	gameObject.play("explode");
	// }

	update() {
		//this.moveStar(this.star,2);

		//this.moveGhost(this.ghost, 0.1);
		//this.background.tilePositionY += 0.5;

		this.movePlayerManager();

		if(Phaser.Input.Keyboard.JustDown(this.spacebar)) {
			this.placeNumbers();

       }
	}

	movePlayerManager() {

		if(this.cursorKeys.left.isDown){
			this.pacman.play("pacman_left");
			this.pacman.setVelocityX(-gameSettings.playerSpeed);
			this.pacman.setVelocityY(0);
		} else if(this.cursorKeys.right.isDown) {
			this.pacman.play("pacman_right");
			this.pacman.setVelocityX(gameSettings.playerSpeed);
			this.pacman.setVelocityY(0);
		}

		if(this.cursorKeys.up.isDown){
			this.pacman.play("pacman_up");
			this.pacman.setVelocityY(-gameSettings.playerSpeed);
			this.pacman.setVelocityX(0);
		} else if(this.cursorKeys.down.isDown) {
			this.pacman.play("pacman_down");
			this.pacman.setVelocityY(gameSettings.playerSpeed);
			this.pacman.setVelocityX(0);
		}
	}

}

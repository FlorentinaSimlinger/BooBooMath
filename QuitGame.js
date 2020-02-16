class QuitGame extends Phaser.Scene{
     constructor(){
        super({key:"QuitGame"});
    }
    create(){
        this.text = this.add.text(50, 50, "Remember, math is a skill, not a talent!", {font:"40px Impact"});
        this.text = this.add.text(100, 100, "Keep on practicing, goodbye!", {font:"40px Impact"});
        this.soundFX = this.sound.add('music', {loop: 'true'});
        this.soundFX.play();

        this.input.keyboard.on("keydown_P", function(e){
            if(this.soundFX.isPlaying) this.soundFX.pause();
            else this.soundFX.resume();
        }, this);
    }
}

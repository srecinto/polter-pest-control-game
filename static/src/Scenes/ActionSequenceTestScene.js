import '//cdn.jsdelivr.net/npm/phaser@3.22.0/dist/phaser.js';
import makeCharacterAnimations from '/assets/animations/character.js';

/**
 * Two Rooms
 * Two Playable Characters
 * Three Ghosts (Two Simple, One Mini Boss)
 * Ghost Scanner, Ghost Capture and Ghost Wrangler equipment
 * Damage to Furniture and Walls
 * Character Damage / Slimed
 *
 **/


export default class ActionSequenceTestScene extends Phaser.Scene {

    constructor () {
        super('ActionSequenceTest');
        console.log('ActionSequenceTestScene.constructor()');

        this.player_m = null;
        this.player_f = null;
        this.room_1 = null;
        this.selectedCharacter = {};
        this.characterPortrait = null;
        this.debugText = null;

    }

    preload () {
        console.log('ActionSequenceTestScene.preload()');

        this.screenCenterX = this.sys.game.config.width / 2;
        this.screenCenterY = this.sys.game.config.height / 2;

        this.room_1 = this.add.image(this.screenCenterX, this.screenCenterY, "test_room_1");
        this.room_1.setDisplaySize(800, 500);

        this.player_f = this.physics.add.sprite(200, 400, "player_f");
        this.player_f.body.setAllowGravity(false);
        //this.player_f.setFrictionAir(0);
        this.player_f.setDisplaySize(200, 200);
        this.player_f.anims.play("player_f_idle", true);

        this.player_m = this.physics.add.sprite(500, 350, "player_m");
        this.player_m.body.setAllowGravity(false);
        //this.player_m.setFrictionAir(0);
        this.player_m.setDisplaySize(200, 200);
        this.player_m.anims.play("player_m_idle", true);

        this.characterPortrait = this.add.sprite(50, 50, "player_f");

    }

    create () {
        console.log('ActionSequenceTestScene.create()');

        this.player_f.setInteractive();
        this.player_m.setInteractive();
        this.player_f.on('clicked', this.onCharacterSelect, this);
        this.player_m.on('clicked', this.onCharacterSelect, this);

        this.player_f.emit('clicked', this.player_f);

        this.debugText = this.add.text(10, 10, 'Click to set target', { fill: '#00ff00' });

        // This allows game objects to emit events
        this.input.on('gameobjectup', function (pointer, gameObject) {
            gameObject.emit('clicked', gameObject);
        }, this);

        this.input.on('pointerdown', function (pointer) {
            console.log('pointerdown');
            console.log(pointer);
            // Check valid movement bounds
            // If Valid, Move selected character towards it,
            // Make user move around obsticles / furnature

            this.selectedCharacter.moveToTarget = {
                x: pointer.x,
                y: pointer.y
            }

            this.physics.moveToObject(this.selectedCharacter, pointer, 200);

        }, this);

        this.input.on('pointerover', function (event, gameObjects) {
            if(gameObjects[0] !== this.selectedCharacter) {
                gameObjects[0].setTint(0xbbbbbb);
            }
        });

        this.input.on('pointerout', function (event, gameObjects) {
            if(gameObjects[0] !== this.selectedCharacter) {
                gameObjects[0].clearTint();
            }
        });
    }

    update(time, delta) {
        // Handle character select
        //if(this.cursor.up.isDown) {

        //}

        if(this.selectedCharacter.movement) {

            var distance = Phaser.Math.Distance.Between(this.selectedCharacter.x, this.selectedCharacter.y, this.selectedCharacter.moveToTarget.x, this.selectedCharacter.moveToTarget.y);
            this.debugText.setText('Distance: ' + distance);
            if (this.selectedCharacter.body.speed > 0)
            {
                //  4 is our distance tolerance, i.e. how close the source can get to the target
                //  before it is considered as being there. The faster it moves, the more tolerance is required.
                if (distance < 4)
                {
                    this.selectedCharacter.body.reset(this.selectedCharacter.moveToTarget.x, this.selectedCharacter.moveToTarget.y);
                }
            }
        }
    }

    onCharacterSelect(character) {
        console.log("onCharacterSelect()");
        this.selectedCharacter.moveToTarget = undefined;
        if (character !== this.selectedCharacter ) { //Only select if not selected
            console.log(character);
            this.selectedCharacter = character;
            this.characterPortrait.setTexture(this.selectedCharacter.texture.key);

        }
    }

};
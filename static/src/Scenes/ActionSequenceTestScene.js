import '//cdn.jsdelivr.net/npm/phaser@3.22.0/dist/phaser.js';

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
        this.room_1_bg = null;
        this.room_1_fg = null;
        this.selectedCharacter = {};
        this.characterPortrait = null;
        this.debugText = null;

    }

    preload () {
        console.log('ActionSequenceTestScene.preload()');

        this.screenCenterX = this.sys.game.config.width / 2;
        this.screenCenterY = this.sys.game.config.height / 2;

        this.room_1_bg = this.add.image(this.screenCenterX, this.screenCenterY, "room_1x1_background");
        this.room_1_bg.setDisplaySize(800, 600);
        this.room_1_bg.setDepth(0);

        this.room_1_fg = this.add.image(this.screenCenterX, this.screenCenterY, "room_1x1_foreground");
        this.room_1_fg.setDisplaySize(800, 600);
        this.room_1_fg.setDepth(50);

        this.room_door_left = this.add.image(this.screenCenterX, this.screenCenterY, "room_door_left");
        this.room_door_left.setDisplaySize(800, 600);
        this.room_door_left.setDepth(50);

        this.room_door_front = this.add.image(this.screenCenterX, this.screenCenterY, "room_door_front");
        this.room_door_front.setDisplaySize(800, 600);
        this.room_door_front.setDepth(50);

        this.room_door_back = this.add.image(this.screenCenterX, this.screenCenterY, "room_door_back");
        this.room_door_back.setDisplaySize(800, 600);
        this.room_door_back.setDepth(0);

        this.room_door_right = this.add.image(this.screenCenterX, this.screenCenterY, "room_door_right");
        this.room_door_right.setDisplaySize(800, 600);
        this.room_door_right.setDepth(0);

        this.room_furnature_clock = this.add.image(600, 200, "furnature_back_clock");
        this.room_furnature_clock.setDisplaySize(65, 65);
        this.room_furnature_clock.setDepth(0);

        this.room_furnature_bookshelf = this.add.image(500, 355, "furnature_back_bookshelf");
        this.room_furnature_bookshelf.setDisplaySize(175, 150);
        this.room_furnature_bookshelf.setDepth(5);

        this.room_furnature_couch = this.add.image(129, 540, "furnature_left_couch");
        this.room_furnature_couch.setDisplaySize(125, 150);
        this.room_furnature_couch.setDepth(30);

        this.room_furnature_coffeetable = this.add.image(300, 530, "furnature_middle_coffeetable");
        this.room_furnature_coffeetable.setDisplaySize(150, 100);
        this.room_furnature_coffeetable.setDepth(30);

        this.room_furnature_planter = this.add.image(700, 550, "furnature_middle_planter");
        this.room_furnature_planter.setDisplaySize(75, 75);
        this.room_furnature_planter.setDepth(40);

        this.player_f = this.physics.add.sprite(200, 400, "player_f");
        this.player_f.body.setAllowGravity(false);
        this.player_f.setScale(3);
        this.player_f.anims.play("player_f_idle", true);
        this.player_f.setDepth(30);

        this.player_m = this.physics.add.sprite(500, 350, "player_m");
        this.player_m.body.setAllowGravity(false);
        this.player_m.setScale(3);
        this.player_m.anims.play("player_m_idle", true);
        this.player_m.setDepth(30);

        this.characterPortrait = this.add.sprite(50, 50, "player_f");
        this.characterPortrait.setDepth(30);

    }

    create () {
        console.log('ActionSequenceTestScene.create()');

        this.player_f.setInteractive();
        this.player_m.setInteractive();
        this.player_f.on('clicked', this.onCharacterSelect, this);
        this.player_m.on('clicked', this.onCharacterSelect, this);

        this.player_f.input.hitArea.setTo(10, 10, 25, 40);
        this.player_m.input.hitArea.setTo(10, 10, 25, 40);

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

            //this.physics.moveToObject(this.selectedCharacter, pointer, 200);

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

        if(this.selectedCharacter.moveToTarget) {

            var distance = Phaser.Math.Distance.Between(this.selectedCharacter.x, this.selectedCharacter.y, this.selectedCharacter.moveToTarget.x, this.selectedCharacter.moveToTarget.y);
            this.debugText.setText('Distance: ' + distance);
            console.log('Distance: ' + distance);
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
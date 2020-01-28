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
        this.room_1 = null;

    }

    preload () {
        console.log('ActionSequenceTestScene.preload()');

        this.screenCenterX = this.sys.game.config.width / 2;
        this.screenCenterY = this.sys.game.config.height / 2;

        this.room_1 = this.add.image(this.screenCenterX, this.screenCenterY, "test_room_1");
        this.room_1.setDisplaySize(800, 500);

        this.player_f = this.matter.add.sprite(200, 400, "player_f");
        this.player_f.setIgnoreGravity(true);
        this.player_f.setFrictionAir(0);
        this.player_f.setDisplaySize(150, 150);

        this.player_m = this.matter.add.sprite(500, 350, "player_m");
        this.player_m.setIgnoreGravity(true);
        this.player_m.setFrictionAir(0);
        this.player_m.setDisplaySize(150, 150);

    }

    create () {
        console.log('ActionSequenceTestScene.create()');
    }
};
import '//cdn.jsdelivr.net/npm/phaser@3.22.0/dist/phaser.js';

/**
 * This scene will be the first scene that is loaded by our game, and we will
 * use it load any assets that will be displayed in the Preloader Scene.
 **/
export default class BootScene extends Phaser.Scene {
    constructor () {
        super('Boot');
        console.log('BootScene.constructor()');
    }

    preload () {
        console.log('BootScene.preload()');
        // load images
        this.load.image('logo', '/assets/logo.png');
    }

    create () {
        console.log('BootScene.create()');
        this.scene.start('Preloader');
    }
};
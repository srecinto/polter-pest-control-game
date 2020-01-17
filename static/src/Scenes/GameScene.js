import '//cdn.jsdelivr.net/npm/phaser@3.22.0/dist/phaser.js';

export default class GameScene extends Phaser.Scene {
    constructor () {
        super('Game');
        console.log('GameScene.constructor()');
    }

    preload () {
        console.log('GameScene.preload()');

    }

    create () {
        console.log('GameScene.create()');
        this.add.image(400, 300, 'logo');
    }
};
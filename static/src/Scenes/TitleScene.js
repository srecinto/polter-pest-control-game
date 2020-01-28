import '//cdn.jsdelivr.net/npm/phaser@3.22.0/dist/phaser.js';

export default class TitleScene extends Phaser.Scene {
    constructor () {
        super('Title');
        console.log('TitleScene.constructor()');
    }

    preload () {
        console.log('TitleScene.preload()');

    }

    create () {
        console.log('TitleScene.create()');
    }
};
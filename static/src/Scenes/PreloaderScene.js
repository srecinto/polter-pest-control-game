import '//cdn.jsdelivr.net/npm/phaser@3.22.0/dist/phaser.js';
import makeCharacterAnimations from '/assets/animations/character.js';

/**
 * In this scene, we are going to load the assets we will be using in our game.
 **/
export default class PreloaderScene extends Phaser.Scene {
    constructor () {
        super('Preloader');
        console.log('PreloaderScene.constructor()');
    }

    preload () {
        console.log('PreloaderScene.preload()');
        this.add.image(400, 300, 'logo');

        // display progress bar
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);

        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        assetText.setOrigin(0.5, 0.5);

        // update progress bar
        this.load.on('progress', function (value) {
            console.log('PreloaderScene.progressBar.progress()');
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });

        // update file progress text
        this.load.on('fileprogress', function (file) {
            console.log('PreloaderScene.progressBar.fileprogress()');
            assetText.setText('Loading asset: ' + file.key);
        });

        // remove progress bar when complete
        this.load.on('complete', function () {
            console.log('PreloaderScene.progressBar.complete()');
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        });

        this.loadStartingAssets();

    }

    create () {
        console.log('PreloaderScene.create()');
        this.scene.start('ActionSequenceTest');
        makeCharacterAnimations(this);
    }

    loadStartingAssets() {
        console.log('PreloaderScene.loadStartingAssets()');

        this.load.image("room_1x1_background", "/assets/rooms/room_1x1_background.png");
        this.load.image("room_1x1_foreground", "/assets/rooms/room_1x1_foreground.png");
        this.load.image("room_door_back", "/assets/rooms/room_door_back.png");
        this.load.image("room_door_front", "/assets/rooms/room_door_front.png");
        this.load.image("room_door_left", "/assets/rooms/room_door_left.png");
        this.load.image("room_door_right", "/assets/rooms/room_door_right.png");
        this.load.image("furnature_back_bookshelf", "/assets/furnature/furnature_back_bookshelf.png");
        this.load.image("furnature_back_clock", "/assets/furnature/furnature_back_clock.png");
        this.load.image("furnature_left_couch", "/assets/furnature/furnature_left_couch.png");
        this.load.image("furnature_middle_coffeetable", "/assets/furnature/furnature_middle_coffeetable.png");
        this.load.image("furnature_middle_planter", "/assets/furnature/furnature_middle_planter.png");
        this.load.spritesheet("player_m", "/assets/characters/player_m.png", { frameWidth: 48, frameHeight: 55 });
        this.load.spritesheet("player_f", "/assets/characters/player_f.png", { frameWidth: 48, frameHeight: 55 });
        this.load.image("ghost", "/assets/characters/ghost.png", { frameWidth: 32, frameHeight: 32 });
    }
};
import '//cdn.jsdelivr.net/npm/phaser@3.22.0/dist/phaser.js';
import config from './Config/config.js';
import GameScene from './Scenes/GameScene.js';
import BootScene from './Scenes/BootScene.js';
import PreloaderScene from './Scenes/PreloaderScene.js';
import TitleScene from './Scenes/TitleScene.js';
import OptionsScene from './Scenes/OptionsScene.js';
import CreditsScene from './Scenes/CreditsScene.js';

class Game extends Phaser.Game {
    constructor () {
        super(config);
        this.scene.add('Boot', BootScene);
        this.scene.add('Preloader', PreloaderScene);
        this.scene.add('Title', TitleScene);
        this.scene.add('Options', OptionsScene);
        this.scene.add('Credits', CreditsScene);
        this.scene.add('Game', GameScene);
        this.scene.start('Boot');
    }
}

window.game = new Game();
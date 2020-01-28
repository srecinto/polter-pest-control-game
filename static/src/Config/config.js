import '//cdn.jsdelivr.net/npm/phaser@3.22.0/dist/phaser.js';

export default {
    type: Phaser.AUTO,
    parent: "gameCanvas",
    width: 800,
    height: 600,
    physics: { default: 'matter' }
};

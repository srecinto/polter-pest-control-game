export default function makeCharacterAnimations(scene) {
    console.log("aminations.character.makeCharacterAnimations()");

    //Game Animations

    scene.anims.create({
        key: "player_f_idle",
        frames: scene.anims.generateFrameNumbers("player_f", { frames: [ 0, 1, 2, 3 ] } ),
        frameRate: 6,
        repeat: -1
    });

    scene.anims.create({
        key: "player_f_walking",
        frames: scene.anims.generateFrameNumbers("player_f", { frames: [ 7, 8, 9, 10, 11, 12 ] } ),
        frameRate: 6,
        repeat: -1
    });

    scene.anims.create({
        key: "player_f_scaning",
        frames: scene.anims.generateFrameNumbers("player_f", { frames: [ 13, 14, 15, 16 ] } ),
        frameRate: 6,
        repeat: -1
    });

    scene.anims.create({
        key: "player_f_shooting",
        frames: scene.anims.generateFrameNumbers("player_f", { frames: [ 19, 20, 21, 22 ] } ),
        frameRate: 6,
        repeat: 1
    });

    scene.anims.create({
        key: "player_f_hit",
        frames: scene.anims.generateFrameNumbers("player_f", { frames: [ 25, 26, 27 ] } ),
        frameRate: 6,
        repeat: 0
    });

    scene.anims.create({
        key: "player_f_ko",
        frames: scene.anims.generateFrameNumbers("player_f", { frames: [ 32, 32, 33, 34 ] } ),
        frameRate: 6,
        repeat: 1
    });

    scene.anims.create({
        key: "player_m_idle",
        frames: scene.anims.generateFrameNumbers("player_m", { frames: [ 0, 1, 2, 3 ] } ),
        frameRate: 6,
        repeat: -1
    });

    scene.anims.create({
        key: "player_m_walking",
        frames: scene.anims.generateFrameNumbers("player_m", { frames: [ 7, 8, 9, 10, 11, 12 ] } ),
        frameRate: 6,
        repeat: -1
    });

    scene.anims.create({
        key: "player_m_scaning",
        frames: scene.anims.generateFrameNumbers("player_m", { frames: [ 13, 14, 15, 16 ] } ),
        frameRate: 6,
        repeat: -1
    });

    scene.anims.create({
        key: "player_m_shooting",
        frames: scene.anims.generateFrameNumbers("player_m", { frames: [ 19, 20, 21, 22 ] } ),
        frameRate: 6,
        repeat: 1
    });

    scene.anims.create({
        key: "player_m_hit",
        frames: scene.anims.generateFrameNumbers("player_m", { frames: [ 25, 26, 27 ] } ),
        frameRate: 6,
        repeat: 0
    });

    scene.anims.create({
        key: "player_m_ko",
        frames: scene.anims.generateFrameNumbers("player_m", { frames: [ 32, 32, 33, 34 ] } ),
        frameRate: 6,
        repeat: -1
    });

    scene.anims.create({
        key: "ghost_idle",
        frames: scene.anims.generateFrameNumbers("ghost", { frames: [ 0, 1, 2, 3, 4 ] } ),
        frameRate: 6,
        repeat: -1
    });

    scene.anims.create({
        key: "ghost_dive",
        frames: scene.anims.generateFrameNumbers("ghost", { frames: [ 7, 8, 9, 10, 11, 12 ] } ),
        frameRate: 6,
        repeat: 0
    });

    scene.anims.create({
        key: "ghost_scare",
        frames: scene.anims.generateFrameNumbers("ghost", { frames: [ 13, 14, 15, 16 ] } ),
        frameRate: 6,
        repeat: 0
    });

    scene.anims.create({
        key: "ghost_attack",
        frames: scene.anims.generateFrameNumbers("ghost", { frames: [ 19, 20, 21, 22 ] } ),
        frameRate: 6,
        repeat: 0
    });

}
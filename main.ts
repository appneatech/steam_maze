scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true, effects.confetti)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . 9 4 9 . . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . 2 7 d 7 2 . . . . . . 
    . . . . . 2 d d d 2 . . . . . . 
    . . . . . 2 . d . 2 . . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . . e . e e e . e . . . . . 
    . . . . d . 4 5 4 . d . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . 8 . 8 . . . . . . . 
    . . . . . e e . e e . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`nivel1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
scene.cameraFollowSprite(mySprite)
info.startCountdown(25)
music.play(music.createSong(hex`0078000408020105001c000f0a006400f4010a0000040000000000000000000000000000000002700000000400012908000c00012a0c00100001251000140003252a2c14001800022a2c18001c0002272a1c0020000324292c200024000324272c2400280002272a28002c00031d202c2c00300002242c30003400012934003800042225292c38003c00041b1e292c3c004000051d22252a2c`), music.PlaybackMode.LoopingInBackground)

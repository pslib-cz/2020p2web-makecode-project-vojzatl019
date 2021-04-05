//vytvoří hráče
let player = sprites.create(img`
    . . . . . . . d d . . . . . . .
    . . . . . . . d d . . . . . . .
    . . . . . . . d d . . . . . . .
    . . . . . . 2 2 2 . . . . . . .
    . . . . . 2 2 2 2 . . . . . . .
    . . . . . 2 2 f f 9 . . . . . .
    . . . . . 2 2 f f 9 . . . . . .
    . . . . . 2 2 f f 9 . . . . . .
    . . . . . 2 2 f f 9 . . . . . .
    . . . . . 2 2 2 2 . . . . . . .
    . . . . . . 2 2 2 . . . . . . .
    . . . . . . . d d . . . . . . .
    . . . . . . . d d . . . . . . .
    . . . . . . . d d . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(player);
//nastavuje mapu :D
tiles.setTilemap(tilemap`level1`)
//kamera sleduje hráče
scene.cameraFollowSprite(player);
//dá postavu do levýho dolního rohu
tiles.placeOnTile(player, tiles.getTileLocation(0, 99))

let smerStrelby;

//ovladani
controller.up.onEvent(ControllerButtonEvent.Pressed, function() {
    
    player.setImage(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . 9 9 9 9 . . . . . .
        . d d d 2 2 f f f f 2 2 d d d .
        . d d d 2 2 f f f f 2 2 d d d .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . . . . . 2 2 2 2 2 2 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    smerStrelby=0;
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function() {
    
    player.setImage(img`
        . . . . . . . . . . . . . . . .
        . . . . . . d d . . . . . . . .
        . . . . . . d d . . . . . . . .
        . . . . . . d d . . . . . . . .
        . . . . . . 2 2 2 . . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . . 9 f f 2 2 . . . . . .
        . . . . . 9 f f 2 2 . . . . . .
        . . . . . 9 f f 2 2 . . . . . .
        . . . . . 9 f f 2 2 . . . . . .
        . . . . . . 2 2 2 2 . . . . . .
        . . . . . . 2 2 2 . . . . . . .
        . . . . . . d d . . . . . . . .
        . . . . . . d d . . . . . . . .
        . . . . . . d d . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    smerStrelby=3;
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function() {
    
    player.setImage(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 2 2 2 2 2 2 . . . . .
        . . . . 2 2 2 2 2 2 2 2 . . . .
        . d d d 2 2 f f f f 2 2 d d d .
        . d d d 2 2 f f f f 2 2 d d d .
        . . . . . . 9 9 9 9 . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    smerStrelby=2;
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function() {
    
    player.setImage(img`
        . . . . . . . d d . . . . . . .
        . . . . . . . d d . . . . . . .
        . . . . . . . d d . . . . . . .
        . . . . . . 2 2 2 . . . . . . .
        . . . . . 2 2 2 2 . . . . . . .
        . . . . . 2 2 f f 9 . . . . . .
        . . . . . 2 2 f f 9 . . . . . .
        . . . . . 2 2 f f 9 . . . . . .
        . . . . . 2 2 f f 9 . . . . . .
        . . . . . 2 2 2 2 . . . . . . .
        . . . . . . 2 2 2 . . . . . . .
        . . . . . . . d d . . . . . . .
        . . . . . . . d d . . . . . . .
        . . . . . . . d d . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `)
    smerStrelby=1;
})
//vytváří nepřátelské entity
for(let i = 0;i<100;i++){
    let enemies = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
    `,SpriteKind.Enemy)
    tiles.placeOnRandomTile(enemies, img`
d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d d 1 d d d d d d d 
b b b b b b d e b b b b b b d e 
d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d b 1 d d d d d d b 
1 d d d d d d d 1 d d d d d d d 
b b b b b b d e d b b b b b b e 
`)
//enemies budou sledovat hráče
enemies.follow(player)
}

//pokud se entita druhu Enemy dotkne entity druhu Player hra skončí
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    player.destroy()
    game.over()
})


    //střelba
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function() {
    let projectile = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . 5 . . . . . . . .
    . . . . . . . 5 . . . . . . . .
    . . . . . . . 5 . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, player, 0, 90)
})


















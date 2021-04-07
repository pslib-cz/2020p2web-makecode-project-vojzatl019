
function enemy(){
    let lil = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . 1 1 1 1 . . . . .
        . . . . . 1 1 1 1 1 1 1 . . . .
        . . . . 1 1 1 1 1 1 1 1 d f . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . 1 9 9 9 9 9 . . . . . .
        . . . . 1 9 d d d d . . . . . .
        . . . . 1 9 d d d d . . . . . .
        . . . . 1 9 d d d d . . . . . .
        . . . . 1 9 d d d d . . . . . .
        . . . . 1 9 9 9 9 9 . . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . . 1 1 1 1 1 . . . . . .
        . . . . . . . 1 1 1 . . . . . .
        . . . . . . . . d d . . . . . .
    `)

    if(lil.vx > 0){
        lil.setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . . 1 1 1 1 . . . . . .
            . . . . . 1 1 1 1 1 1 1 . . . .
            . . . f d 1 1 1 1 1 1 1 1 . . .
            . . . . . . . 1 1 1 1 1 1 . . .
            . . . . . . . 9 9 9 9 9 1 . . .
            . . . . . . . d d d d 9 1 . . .
            . . . . . . . d d d d 9 1 . . .
            . . . . . . . d d d d 9 1 . . .
            . . . . . . . d d d d 9 1 . . .
            . . . . . . . 9 9 9 9 9 1 . . .
            . . . . . . . 1 1 1 1 1 1 . . .
            . . . . . . . 1 1 1 1 1 1 . . .
            . . . . . . . 1 1 1 1 1 . . . .
            . . . . . . . 1 1 1 . . . . . .
            . . . . . . . d d . . . . . . .
        `)
    }
    if(lil.vx > 0){
        lil.setImage(img`
             . . . . . . . . . . . . . . . .
        . . . . . . . 1 1 1 1 . . . . .
        . . . . . 1 1 1 1 1 1 1 . . . .
        . . . . 1 1 1 1 1 1 1 1 d f . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . 1 9 9 9 9 9 . . . . . .
        . . . . 1 9 d d d d . . . . . .
        . . . . 1 9 d d d d . . . . . .
        . . . . 1 9 d d d d . . . . . .
        . . . . 1 9 d d d d . . . . . .
        . . . . 1 9 9 9 9 9 . . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . . 1 1 1 1 1 . . . . . .
        . . . . . . . 1 1 1 . . . . . .
        . . . . . . . . d d . . . . . .
        `)
    }
    if(lil.vy > 0){
        lil.setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . f . . . . . . . . . . . .
            . . . d . . . . . . . . . . . .
            . . 1 1 . . . . . . . . . . . .
            . 1 1 1 . . . . . . . . . . . .
            . 1 1 1 1 9 d d d d 9 1 1 1 1 d
            . 1 1 1 1 9 d d d d 9 1 1 1 1 d
            . 1 1 1 1 9 d d d d 9 1 1 1 1 .
            . . 1 1 1 9 d d d d 9 1 1 1 . .
            . . 1 1 1 9 9 9 9 9 9 1 1 1 . .
            . . . 1 1 1 1 1 1 1 1 1 1 . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `)
    }
    if(lil.vy < 0){
        lil.setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . 1 1 1 1 1 1 1 1 1 1 . . .
            . . 1 1 1 9 9 9 9 9 9 1 1 1 . .
            . . 1 1 1 9 d d d d 9 1 1 1 . .
            . 1 1 1 1 9 d d d d 9 1 1 1 1 .
            d 1 1 1 1 9 d d d d 9 1 1 1 1 .
            d 1 1 1 1 9 d d d d 9 1 1 1 1 .
            . . . . . . . . . . . . 1 1 1 .
            . . . . . . . . . . . . 1 1 . .
            . . . . . . . . . . . . d . . .
            . . . . . . . . . . . . f . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `)
    }
tiles.placeOnTile(player, tiles.getTileLocation(0, 98))
    

    

}

enemy();

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
controller.moveSprite(player,150,150 );
//nastavuje mapu :D
tiles.setTilemap(tilemap`level1`)
//kamera sleduje hráče
scene.cameraFollowSprite(player);
//dá postavu do levýho dolního rohu
tiles.placeOnTile(player, tiles.getTileLocation(0, 99))






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
    
    
})
let enemies:Sprite[] = [];
//vytváří nepřátelské entity
for(let i = 0;i<5;i++){

   enemies.push(sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . 1 1 1 1 . . . . .
        . . . . . 1 1 1 1 1 1 1 . . . .
        . . . . 1 1 1 1 1 1 1 1 d f . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . 1 9 9 9 9 9 . . . . . .
        . . . . 1 9 d d d d . . . . . .
        . . . . 1 9 d d d d . . . . . .
        . . . . 1 9 d d d d . . . . . .
        . . . . 1 9 d d d d . . . . . .
        . . . . 1 9 9 9 9 9 . . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . . 1 1 1 1 1 . . . . . .
        . . . . . . . 1 1 1 . . . . . .
        . . . . . . . . d d . . . . . .
    `,SpriteKind.Enemy))
    tiles.placeOnRandomTile(enemies[i], img`
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
enemies[i].follow(player)
enemies[i].setBounceOnWall(true)

/*
    if(enemies[i].vx > 0){
        enemies[i].setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . . 1 1 1 1 . . . . . .
            . . . . . 1 1 1 1 1 1 1 . . . .
            . . . f d 1 1 1 1 1 1 1 1 . . .
            . . . . . . . 1 1 1 1 1 1 . . .
            . . . . . . . 9 9 9 9 9 1 . . .
            . . . . . . . d d d d 9 1 . . .
            . . . . . . . d d d d 9 1 . . .
            . . . . . . . d d d d 9 1 . . .
            . . . . . . . d d d d 9 1 . . .
            . . . . . . . 9 9 9 9 9 1 . . .
            . . . . . . . 1 1 1 1 1 1 . . .
            . . . . . . . 1 1 1 1 1 1 . . .
            . . . . . . . 1 1 1 1 1 . . . .
            . . . . . . . 1 1 1 . . . . . .
            . . . . . . . d d . . . . . . .
        `)
    }
    if(enemies[i].vx > 0){
        enemies[i].setImage(img`
             . . . . . . . . . . . . . . . .
        . . . . . . . 1 1 1 1 . . . . .
        . . . . . 1 1 1 1 1 1 1 . . . .
        . . . . 1 1 1 1 1 1 1 1 d f . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . 1 9 9 9 9 9 . . . . . .
        . . . . 1 9 d d d d . . . . . .
        . . . . 1 9 d d d d . . . . . .
        . . . . 1 9 d d d d . . . . . .
        . . . . 1 9 d d d d . . . . . .
        . . . . 1 9 9 9 9 9 . . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . 1 1 1 1 1 1 . . . . . .
        . . . . . 1 1 1 1 1 . . . . . .
        . . . . . . . 1 1 1 . . . . . .
        . . . . . . . . d d . . . . . .
        `)
    }
    if(enemies[i].vy > 0){
        enemies[i].setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . f . . . . . . . . . . . .
            . . . d . . . . . . . . . . . .
            . . 1 1 . . . . . . . . . . . .
            . 1 1 1 . . . . . . . . . . . .
            . 1 1 1 1 9 d d d d 9 1 1 1 1 d
            . 1 1 1 1 9 d d d d 9 1 1 1 1 d
            . 1 1 1 1 9 d d d d 9 1 1 1 1 .
            . . 1 1 1 9 d d d d 9 1 1 1 . .
            . . 1 1 1 9 9 9 9 9 9 1 1 1 . .
            . . . 1 1 1 1 1 1 1 1 1 1 . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `)
    }
    if(enemies[i].vy < 0){
        enemies[i].setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . 1 1 1 1 1 1 1 1 1 1 . . .
            . . 1 1 1 9 9 9 9 9 9 1 1 1 . .
            . . 1 1 1 9 d d d d 9 1 1 1 . .
            . 1 1 1 1 9 d d d d 9 1 1 1 1 .
            d 1 1 1 1 9 d d d d 9 1 1 1 1 .
            d 1 1 1 1 9 d d d d 9 1 1 1 1 .
            . . . . . . . . . . . . 1 1 1 .
            . . . . . . . . . . . . 1 1 . .
            . . . . . . . . . . . . d . . .
            . . . . . . . . . . . . f . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `)
    }
    */
}

//pokud se entita druhu Enemy dotkne entity druhu Player hra skončí
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    player.destroy()
    game.over()
})

let list:Sprite[] = [];
let strelba;
    //střelba
  
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function(){
    if (player.vx > 0){

        shoot(200,0);
    }
    else if(player.vx < 0){
        shoot(-200,0);
            }
            
    else if(player.vy < 0){
        
                shoot(0,-200);
            }
            
    else if(player.vy > 0){
        
                shoot(0,200);
            }

            

})


function shoot(x:number, y:number){

        list.push(sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . 2 2 . . . . . . .
            . . . . . . . 2 2 . . . . . . .
            . . . . . . . 2 2 . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, player, x, y))
    
    

}


sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function(sprite: Sprite, otherSprite: Sprite) {
    
    sprite.destroy(effects.disintegrate);
    
    otherSprite.destroy();
})


tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 3 f . . . . 
    . . . f 1 3 3 3 3 3 1 3 f . . . 
    . . . f 3 3 f f f f 3 1 f . . . 
    . . . f 3 f f d d f f 3 f . . . 
    . . f 3 f d f d d f d f 3 f . . 
    . . f 3 f d 3 d d 3 d f 3 f . . 
    . . f 3 3 f d d d d f 3 3 f . . 
    . f 3 3 f 3 f f f f 3 f 3 3 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(7, 106)

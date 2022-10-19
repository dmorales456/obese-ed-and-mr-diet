namespace SpriteKind {
    export const Ball = SpriteKind.create()
    export const right_paddle = SpriteKind.create()
    export const left_paddle = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.right_paddle, function (sprite, otherSprite) {
    BananaBall.vx = BananaBall.vx * -1
    info.player2.changeScoreBy(1)
})
function create_Mr_Diet () {
    Mr_Diet = sprites.create(img`
        . . . . . . 7 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . 7 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . 7 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . 7 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . 7 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . 7 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . 7 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.right_paddle)
    Mr_Diet.x = scene.screenWidth()
    Mr_Diet.setStayInScreen(true)
    controller.player2.moveSprite(Mr_Diet, 0, 100)
    info.player2.setScore(0)
}
function create_ball () {
    BananaBall = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . 5 . . . 5 e 5 . . . . . . . 
        . . e 5 . . 5 5 5 . . . . . . . 
        . . 5 5 5 5 5 e . . . . . . . . 
        . . . 5 e 5 5 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Ball)
    BananaBall.setVelocity(75, 75)
    BananaBall.setBounceOnWall(true)
    BananaBall.y = randint(0, 120)
}
function create_obese_ed () {
    Obese_Ed = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 4 5 4 2 . . . . . . 
        . . . . . 2 4 5 4 2 . . . . . . 
        . . . . . 2 4 4 4 2 . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.left_paddle)
    controller.moveSprite(Obese_Ed, 0, 100)
    Obese_Ed.x = 0
    Obese_Ed.setStayInScreen(true)
    info.setScore(0)
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.left_paddle, function (sprite, otherSprite) {
    BananaBall.vx = BananaBall.vx * -1
    info.changeScoreBy(1)
})
let Obese_Ed: Sprite = null
let Mr_Diet: Sprite = null
let BananaBall: Sprite = null
create_ball()
create_obese_ed()
create_Mr_Diet()

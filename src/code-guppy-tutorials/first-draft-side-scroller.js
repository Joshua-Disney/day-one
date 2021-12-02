/* FIRST DRAFT SIDE SCROLLER */


// Global variables
const groundLevel = 400
// while gravity is active, player will fall
const gravity = 1
const speed = 6.5
// how quickly the player can jump
const jumpVelocity = -20
// Amount of times taken damage
let hits = 0

// Win conditions
// Survived means reached the end of the path
let survived = false
// Won means survived with 3 or less hits
let won = false


const debug = false

// Set background and floor
background("Jungle")
let tileArr = createTiles()

// Create our hero!  :D
let player = sprite("adventure_girl.idle", 350, groundLevel, .5)
player.setCollider("rectangle", 0, 0, 220, 500);
player.debug = debug

function loop() {
    // update function handles all player movement
    update()
    // ADD THIS BACK IN AFTER TEST
    // checkCollisions()
}

function update() {
    player.show("idle")

    // Moves the ground to the right making the player appear to move left
    if (keyIsDown(LEFT_ARROW)) {
        run(-1)
        updateTiles(-1)
    }
    // Moves the ground to the left making the player appear to move right
    else if (keyIsDown(RIGHT_ARROW)) {
        run(1)
        updateTiles(1)
    }
    // Only lets the player jump if they're already standing
    if ((keyIsDown(UP_ARROW) || keyIsDown(32)) && player.state === "standing")
        jump()
    else 
        fall()
}

function jump() {
    player.velocity.y = jumpVelocity
    player.state = "jumping"
}

function fall() {
    // catches up to jumpVelocity over time, eventually over taking
    // and bringing the player back down gradually
    player.velocity.y += gravity

    // Once the player starts to fall back towards groundLevel
    if (player.velocity.y > 0) {
        player.state = "falling"
    }

    // Makes sure the player doesn't fall beneath the ground
    if (player.y >= groundLevel) {
        player.y = groundLevel
        player.velocity.y = 0
        player.state = "standing"
    }

    if (player.state !== "standing")
        player.show("jump")
}

function run(dir) {
    player.show("run")
    player.mirrorX(dir)
}

// Creating tiles BEFORE making update function, might break code
function createTiles() {
    let tileArr = []

    for (let i = 0; i < 8; i++) {
        let tile = sprite("grass02", 64 + 128 * i, 578, 1)
        tileArr.push(tile)    }

    return tileArr
}

// Might need to move this above createTiles, standby
function updateTiles(dir) {
    let tilesEnd = tileArr.length * 128

    for (let tile of tileArr) {
        tile.x -= dir * speed

        if (tile.x < -64)
            tile.x += tilesEnd
        else if (tile.x > width + 64)
            tile.x -= tilesEnd
    }
}

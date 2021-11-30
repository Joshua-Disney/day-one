// THE SCENE

// We start our game by designing the scene. We select:

// a nice background that represent a desert scene
// a character for the player
// a series of tiles to make up the moving floor
// For now everything is static… but beautiful.

// Note: We selected 8 tiles for the floor. Since a tile dimension is 128, our floor will be 1024 pixels wide, 
// more than 800 - the width of the screen. This is good since we want the floor to extend slightly outside the screen 
// (you'll see why is important when we animate it).

// background('PinkHills');

// let arTiles = createTiles();
// let player = sprite('adventure_girl.idle', 400, 350, 0.5);

// function createTiles() {
//     let ar = [];
//     for(let i = 0; i < 8; i++){
//         let tile = sprite('desert02', 64 + 128 * i, 536, 1);
//         ar.push(tile);
//     }
//     return ar;
// }

// Continuous Running
// The nexst step is to implement the running. Our continuous running effect works like this:

// the player allways stays in the middle of the screen
// when LEFT or RIGHT arrows are pressed the player turns into coresponding direction
// also the floor tiles are shifted into the oposite direction
// Although the player never leaves the center of the screen, the moving of the floor tiles give the illusion of movement (running).

// Note: You may notice that you can run forever to the left or right of the scene. However we're not using an infinite number of tiles. 
// Instead, the tile that leaves the edge of the screen is repurposed and added at the end of tiles array.

// That's why we added more tiles - to avoid seeing the jumping tile.

// const speed = 5;

// background('PinkHills');
// let arTiles = createTiles();
// let player = sprite('adventure_girl.idle', 400, 350, 0.5);

// function loop() {
//     player.show("idle");
    
//     if (keyIsDown(LEFT_ARROW)) {
//         run(-1);
//         updateTiles(-1);
//     }
//     else if (keyIsDown(RIGHT_ARROW) || keyIsDown(32) ) {
//         run(1);
//         updateTiles(1);
//     }
// }

// function run(dir) {
//     player.show("run");
//     player.mirrorX(dir);
// }

// function updateTiles(dir) {
//     let tilesLen = arTiles.length * 128;
    
//     for(let tile of arTiles) {
//         tile.x -= dir * speed;
//         // Repurpose the tile that leaves the visible screen
//         if (tile.x < -64)
//             tile.x += tilesLen;
//         else if (tile.x > width + 64)
//             tile.x -= tilesLen;
//     }
// }

// function createTiles() {
//     let ar = [];
    
//     for(let i = 0; i < 8; i++) {
//         let tile = sprite('desert02', 64 + 128 * i, 536, 1);
//         ar.push(tile);
//     }
    
//     return ar;
// }


// Run and Jump
// In "Desert adventure" you can jump using the UP arrow or the SPACE key.

// Take a look at the program in the code editor, you'll see how implemented a basic but very easy to understand jump.

// When the user presses the jump key, we quickly change the .y coordinate of our player (substract 300). Of course we 
// first verify that they player stays on the ground to avoid jumping through air:

// if (player.y >= groundLevel)
//     player.y -= 300;
// Falling down it is handled later by simply adding to .y coordinate of our player until reaches the ground.

// if (player.y < groundLevel)
// {
//     player.y += 10;
//     player.show("jump");
// }
// The jump works… but it is a little bit 'harsh'.


// const speed = 5;
// const groundLevel = 350;

// background('PinkHills');
// let arTiles = createTiles();
// let player = sprite('adventure_girl.idle', 400, groundLevel, 0.5);

// function loop() {
//     player.show("idle");
    
//     if (keyIsDown(LEFT_ARROW)) {
//         run(-1);
//         updateTiles(-1);
//     }
//     else if (keyIsDown(RIGHT_ARROW)) {
//         run(1);
//         updateTiles(1);
//     }
    
//     if (keyIsDown(UP_ARROW) || keyIsDown(32)) {
//         jump();
//     }

//     fall();    
// }

// function jump() {
//     if (player.y >= groundLevel)
//         player.y -= 300;
// }

// function fall() {
//     if (player.y < groundLevel)
//     {
//         player.y += 10;
//         player.show("jump");
//     }
// }

// function run(dir) {
//     player.show("run");
//     player.mirrorX(dir);
// }

// function updateTiles(dir) {
//     let tilesLen = arTiles.length * 128;
    
//     for(let tile of arTiles) {
//         tile.x -= dir * speed;
        
//         if (tile.x < -64)
//             tile.x += tilesLen;
//         else if (tile.x > width + 64)
//             tile.x -= tilesLen;
//     }
// }

// function createTiles() {
//     let ar = [];
    
//     for(let i = 0; i < 8; i++) {
//         let tile = sprite('desert02', 64 + 128 * i, 536, 1);
//         ar.push(tile);
//     }
//     return ar;
// }


// A better jump
// A nice jump is a very important feature of a platform game. Therefore we will take the jump 
// separately and see how we can improve it.  Try to run the program in the code editor and notice 
// that the jump is nice and smooth both upwards and downwards.  This is because instead of forcingly 
// reposition the player a number of pixels up, we are instead asigning it a velocity on the y axis.

// if (keyIsDown(32) && p.state === "standing") {
//     p.velocity.y = jumpVelocity;
//     // ...
// }
// In each frame the computer will advance the player on the indicated direction with the number of pixels 
// indicated (e.g. jumpVelocity).

// In the same time we are adding to the velocity the gravity. This is lower than the jumpVelocity but with 
// different time. Eventually after a certain number of frames, this addition will make velocity become positive, 
// therefore the player will start to move down (to fall).

// p.velocity.y += gravity; 
// Play with the program in the code editor to understand it. Then save it in case you may want to reuse the 
// same technique for other games.

// const jumpVelocity = -25;
// const gravity = 1;
// const groundLevel = 415;

// background('PinkHills');
// var p = sprite('adventure_girl.idle', 400, 200, 0.5);

// function loop()
// {
//     // Jump if Space is pressed ...
//     // and the current stand is standing (to avoid jumping through air)
//     if (keyIsDown(32) && p.state === "standing") {
//         p.state = "jumping";
//         p.velocity.y = jumpVelocity;
//         return;
//     }
    
//     // Add gravity to velocity
//     p.velocity.y += gravity; 
    
//     // ... eventually going up will stop
//     // and will start to come down
//     if (p.velocity.y > 0)
//         p.state = "falling";
    
//     // Reset velocity and state if on ground
//     if (p.y >= groundLevel) {
//         p.y = groundLevel;
//         p.velocity.y = 0;
//         p.state = "standing";
//     }

//     displayStats();    
// }


// function displayStats() {
//     noStroke();
//     fill("black");
//     textSize(20);
    
//     clear();
//     text(p.state + " --- " + p.velocity.y, 30, 30);
// }


// Obstacles
// It is now time to revisit the game. You can see that we incorporated the new jump support.

// We also added in a simple array the cacti obstacles and the tree that the player need to 
// reach (the tree is actually the last item in the obtacles collection - even if it is not an obstacle itself).

// Collisions are checked in the checkCollisions function:

// function checkCollisions() {
//     for(let i = 0; i < arCacti.length - 1; i++) {
//         let cactus = arCacti[i];

//         if (cactus.collide(player) && cactus.rotationSpeed === 0) {
//             // ...
//             hit++;
//         }
//     }

//     let tree = arCacti[arCacti.length - 1];
//     if (tree.collide(player) && !finished) {
//         finished = true;
//         // ...
//     }    
// }


// const speed = 8;
// const jumpVelocity = -25;
// const gravity = 1;

// const debug = false;

// background('PinkHills');
// let arCacti = createCacti();
// let arTiles = createTiles();

// let player = sprite('adventure_girl.idle', 400, 0, 0.5);
// player.setCollider("rectangle", 0, 0, 220, 500);
// player.debug = debug;

// let finished = false;   // true if we found the tree

// function loop() {
//     update();
//     checkCollisions();
// }

// function update() {
//     player.show("idle");
    
//     if (keyIsDown(LEFT_ARROW)) {
//         run(-1);
//         updateTiles(-1);
//         updateCacti(-1);
//     }
//     else if (keyIsDown(RIGHT_ARROW)) {
//         run(1);
//         updateTiles(1);
//         updateCacti(1);
//     }
    
//     if ( (keyIsDown(UP_ARROW) || keyIsDown(32)) && player.state === "standing" )
//         jump();
//     else
//         fall();
// }

// function jump() {
//     player.velocity.y = jumpVelocity;
//     player.state = "jumping";
// }

// function fall() {
//     player.velocity.y += gravity; 
    
//     if (player.velocity.y > 0)
//         player.state = "falling";
    
//     if (player.y >= 350) {
//         player.y = 350;
//         player.velocity.y = 0;
//         player.state = "standing";
//     }
    
//     if (player.state !== "standing")
//         player.show("jump");
// }

// function run(dir) {
//     player.show("run");
//     player.mirrorX(dir);
// }

// function updateTiles(dir) {
//     let tilesLen = arTiles.length * 128;
    
//     for(let tile of arTiles) {
//         tile.x -= dir * speed;
        
//         if (tile.x < -64)
//             tile.x += tilesLen;
//         else if (tile.x > width + 64)
//             tile.x -= tilesLen;
//     }

// }

// function updateCacti(dir) {
//     for(let cactus of arCacti) {
//         cactus.x -= dir * speed;
//     }
// }

// function createTiles() {
//     let ar = [];
    
//     for(let i = 0; i < 8; i++) {
//         let tile = sprite('desert02', 64 + 128 * i, 536, 1);
//         ar.push(tile);
//     }
//     return ar;
// }

// function createCacti() {
//     let ar = [];
//     let w = width + random(100, 200);
    
//     for(let i = 0; i < 10; i++) {
//         let cactus = sprite('cactus', w, 410, 0.2);
//         cactus.immovable = true;
//         cactus.debug = debug;
        
//         ar.push( cactus );
//         w += random(500, 800);
//     }
    
//     let tree = sprite('tree2', w, 260, 0.7);
//     tree.immovable = true;
//     tree.debug = debug;
//     ar.push( tree );

//     return ar;    
// }

// function checkCollisions() {
//     // Check for collisions with cacti
//     for(let i = 0; i < arCacti.length - 1; i++) {
//         let cactus = arCacti[i];
        
//         // If we hit the cactus and the cactus is not already hit (e.g. spinning)
//         if (cactus.collide(player) && cactus.rotationSpeed === 0) {
//             // ... then start spining the cactus and make it go down
//             cactus.rotationSpeed = 1;
//             cactus.velocity.y = 1;
//         }
//     }
    
//     // The tree is the last item in the array.
//     // It is actually not an obstactle...
//     let tree = arCacti[arCacti.length - 1];
//     if (tree.collide(player) && !finished) {
//         finished = true;
//     }    
// }


// Conclusions
// The games is now ready. We've added a few sounds effects and a small toolbar to display 
// instructions and progress.

// If you liked this game go ahead and fork it (use Save a copy command). Then try to change 
// the graphics or even extend the code to implement multiple levels or proper intro and credit scenes.

// Happy coding!

// const speed = 8;
// const jumpVelocity = -25;
// const gravity = 1;

// const debug = false;

// // Background music. Second parameter is the volume.
// music('8 bit retro', 0.1);

// background('PinkHills');
// let arCacti = createCacti();
// let arTiles = createTiles();

// let player = sprite('adventure_girl.idle', 400, 0, 0.5);
// player.setCollider("rectangle", 0, 0, 220, 500);
// player.debug = debug;

// let finished = false;   // true if we found the tree
// let won = false;        // true if we hit less than 3 cacti
// let hit = 0;            // how many cacti we hit

// let textY = -40;
// let text2V = true;

// function loop() {
//     update();
//     checkCollisions();
//     displayInstructions();
// }

// function update() {
//     player.show("idle");
    
//     if (keyIsDown(LEFT_ARROW)) {
//         run(-1);
//         updateTiles(-1);
//         updateCacti(-1);
//     }
//     else if (keyIsDown(RIGHT_ARROW)) {
//         run(1);
//         updateTiles(1);
//         updateCacti(1);
//     }
    
//     if ( (keyIsDown(UP_ARROW) || keyIsDown(32)) && player.state === "standing" )
//         jump();
//     else
//         fall();
// }

// function jump() {
//     sound('phaseJump1');
//     player.velocity.y = jumpVelocity;
//     player.state = "jumping";
// }

// function fall() {
//     player.velocity.y += gravity; 
    
//     if (player.velocity.y > 0)
//         player.state = "falling";
    
//     if (player.y >= 350) {
//         player.y = 350;
//         player.velocity.y = 0;
//         player.state = "standing";
//     }
    
//     if (player.state !== "standing")
//         player.show("jump");
// }

// function run(dir) {
//     player.show("run");
//     player.mirrorX(dir);
// }

// function updateTiles(dir) {
//     let tilesLen = arTiles.length * 128;
    
//     for(let tile of arTiles) {
//         tile.x -= dir * speed;
        
//         if (tile.x < -64)
//             tile.x += tilesLen;
//         else if (tile.x > width + 64)
//             tile.x -= tilesLen;
//     }

// }

// function updateCacti(dir) {
//     for(let cactus of arCacti) {
//         cactus.x -= dir * speed;
//     }
// }

// function createTiles() {
//     let ar = [];
    
//     for(let i = 0; i < 8; i++) {
//         let tile = sprite('desert02', 64 + 128 * i, 536, 1);
//         ar.push(tile);
//     }
//     return ar;
// }

// function createCacti() {
//     let ar = [];
//     let w = width + random(100, 200);
    
//     for(let i = 0; i < 10; i++) {
//         let cactus = sprite('cactus', w, 410, 0.2);
//         cactus.immovable = true;
//         cactus.debug = debug;
        
//         ar.push( cactus );
//         w += random(500, 800);
//     }
    
//     let tree = sprite('tree2', w, 260, 0.7);
//     tree.immovable = true;
//     tree.debug = debug;
//     ar.push( tree );

//     return ar;    
// }

// function checkCollisions() {
//     // Check for collisions with cacti
//     for(let i = 0; i < arCacti.length - 1; i++) {
//         let cactus = arCacti[i];
        
//         // If we hit the cactus and the cactus is not already hit (e.g. spinning)
//         if (cactus.collide(player) && cactus.rotationSpeed === 0) {
//             // ... then start spining the cactus and make it go down
//             cactus.rotationSpeed = 1;
//             cactus.velocity.y = 1;
            
//             sound('spaceTrash1');
//             hit++;
//         }
//     }
    
//     // The tree is the last item in the array.
//     // It is actually not an obstactle...
//     let tree = arCacti[arCacti.length - 1];
//     if (tree.collide(player) && !finished) {
//         finished = true;
        
//         if (hit <= 3) {
//             won = true;
//             sound('female_congratulations');
//         }
//     }    
// }

// // Display the top bar with instructions
// // The bar is lowered in the screen when the game starts
// function displayInstructions() {
//     fill("pink");
//     rect(0, textY, width, 40)
    
//     noStroke();
//     fill("black");
    
//     text("Use LEFT and RIGHT arrow keys to walk. SPACE to jump.", 20, textY + 24);
    
//     if (textY < 0)
//         textY += 0.5;
     
//     if (frameCount % 20 === 0)
//         text2V = !text2V;
        
//     if (!finished || text2V) {
//         let txt = hit === 0 ? "GO RIGHT" : "HIT: " + hit;
        
//         if (won)
//             txt = "YOU WON";

//         text(txt, 720, textY + 24);
//     }
// }

// Two ways to add sprites to games and programs:
// by using the sprites from the built-in library. These sprites are nicely drawn by professional artists 
// with lots of experience in graphics design and animation. Using built-in sprites is a great way of 
// focusing only on the programming aspect of the game

// by using in-code defined sprites. These are sprites that you can design yourself directly in the code, 
// although some people prefer to design these sprites first on a grid paper and then transfer them in the code. 
// In-code defined sprites is a great option if you want to design a game with custom graphics or if you want to 
// implement a retro-looking game.


// Let’s look at the sprite command in the code editor and understand its syntax:

// sprite('adventure_girl.idle', 400, 300, 0.5);
// Notice the parameters:

// adventure_girl is the name of the sprite you selected (required).
// idle is the sprite animation. Some sprites have multiple animations inside, therefore 
// its useful to specify what animation to load first. (optional)
// 400, 300 are the coordinates where the sprite is displayed (optional)
// 0.5 is the scale of the sprite relative to original dimensions (optional)
// Sprite name and animation name are specified in a single string in format 'sprite.animation'.


// sprite('adventure_girl.idle', 100, 100, 0.3);
// sprite('adventure_girl.run', 250, 100, 0.3);
// sprite('adventure_girl.jump', 400, 100, 0.3);
// sprite('adventure_girl.slide', 100, 300, 0.3);
// sprite('adventure_girl.shoot', 250, 300, 0.3);
// sprite('adventure_girl.melee', 400, 300, 0.3);
// sprite('adventure_girl.dead', 100, 500, 0.3);
// All sprites are adventure_girl, the motion is the animation combined with name as String
// first number is X coordinate, second number is Y coordinate
// last number is size of sprite compared to original file


// MOVES THE SPRITE TO THE MOUSE LOCATION
// let player = sprite('adventure_girl.idle', 400, 300, 0.5);

// function mouseMoved()
// {
//     player.y = mouseX;
//     player.x = mouseY;
// }


// Instead of changing the .x and .y coordinates yourself, you can let the engine move the sprite 
// automatically on x or y axes by specifying a value for the appropriate .velocity.

// This will indicate how fast the sprite should move. A zero value will make the sprite stop.

// let plane = sprite('plane.fly', 0, 100, 0.5);
// plane.velocity.x = 1;
// For more details check the program from the code editor. It is a plane that drops coins! Both the plan 
// and coins are animated using the .velocity properties.


// PLANE FLYS FROM LEFT TO RIGHT, LOOPING, DROPPING COINS EVERY 100 PIXELS AND SLOWLY GAINING ALTITUDE.  COINS MOVE RIGHT AS THEY FALL
// let plane = sprite('plane.fly', 0, 300, 0.5);
// plane.velocity.x = 5;
// plane.velocity.y = -.5

// function loop()
// {
//     if (plane.x > width)
//         plane.x = 0;
        
//     if (plane.x % 100 === 0)
//     {
//         let game = sprite('coin.gold', plane.x, plane.y, 0.5);
//         game.velocity.y = 5;
//         game.velocity.x = .5
//     }
// }


// If the character needs to move to the other direction, then you need to flip the sprite, 
// otherwise it will appear as is moving backwards.
// To mirror a sprite use the .mirror method with -1 as argument. To mirror it to the original 
// direction use 1 as argument.

// SETS THE BACKGROUND AND SPRITE AND HAS IT TURN AROUND AT THE EDGE OF EACH SCREEN
// background('Field');

// let dir = 1;
// let speed = 3;

// let plane = sprite('plane.fly', 0, 100, 0.3);
// plane.velocity.x = dir * speed;
// plane.mirrorX(1);

// function loop()
// {
//     if (plane.x > width || plane.x < 0)
//         dir *= -1;

//     // Change the moving direction
//     plane.velocity.x = dir * speed;
    
//     // And mirror the sprite
//     plane.mirrorX(dir);
// }


// You may want to rotate your sprites at an arbitrary angle. You can do this using the .rotation property 
// which allow you to specify a rotation angle.

// Automatic rotation
// If you want the sprite to rotate automatically for an indefinite time, you can put it on autorotate by giving 
// a greater than zero value to .rotationSpeed property.

// CREATES TEN TOWERS IN A ROW, EACH SLIGHTLY ROTATED, UPON MOUSECLICK ALL TOWERS ROTATE IN ANIMATION
// let arTowers = [];

// for(let i = 0; i < 10; i++)
// {
//     let tower = sprite('tower', 40 + i * 80, 300, .5);
//     tower.rotation = i * 10;
    
//     arTowers.push(tower);
// }

// function mouseClicked()
// {
//     for(let tower of arTowers)
//         tower.rotationSpeed = 1;
// }


// To control which sprite is drawn on top, and which one is drawn behind, 
// you can make use of the .depth property. Sprites with lower depth are drawn behind the ones with higher depth.

// // Background is always drawn at the bottom
// background('Field');

// let coin = sprite('coin.gold', 0.5);

// let tree1 = sprite('tree1', 100, 350, 0.5);
// let tree2 = sprite('tree2', 400, 350, 0.5);
// let tree3 = sprite('tree3', 700, 350, 0.35);

// // Tree2 will be displayed behind the graphics plane
// tree2.depth = -1;

// // Makes the coin go on top of the other sprites
// coin.depth = 100;


// noStroke();
// fill("lime");

// function loop()
// {
//     clear();  /* DOES NOT CLEAR BACKGROUND OR SPRITES  clears all lines, circles, and rect  MAYBE MORE NEED TO LOOKUP MORE DETAIL */
//     rect(0, mouseY, width, 20);
    
//     coin.x = mouseX;
//     coin.y = mouseY - 10;
// }



// If the sprite you selected contains multiple animations, you can specify what animation you want to display 
// initially by adding the animation name with a . in the string of the first parameter:

// Example:
// let player = sprite('adventure_girl.idle', 400, 300, 0.5);
// However, later one, you can change the animation of that sprite using the .show method:
// player.show('run');


// background('Jungle');

// let player = sprite('adventure_girl.idle', 400, 400, 0.5);

// function loop()
// {
//     player.show("idle");
    
//     if (keyIsDown(LEFT_ARROW))
//     {
//         player.x -= 8;
//         player.mirrorX(-1);
//         player.show("run");
//     }
//     else if (keyIsDown(RIGHT_ARROW))
//     {
//         player.x += 8;
//         player.mirrorX(1);
//         player.show("run");
//     }
// }



// You can detect mouse clicks on sprites in two ways:

// By checking the system variables mouseX and mouseY are withing the boundaries of a sprite inside a global mouseClicked event.

// By using the .onMousePressed property at the level of the sprite.

// Check the program in the code editor for a quick example.

// Other mouse events
// Besides clicks, you can also detect other mouse events on sprites using these properties. All of them can be used is a similar way:

// .onMousePressed (explained above)
// .onMouseReleased
// .onMouseOver
// .onMouseOut


// You can hide a sprite in two ways:

// Setting the .visible property to false
// Setting the .x and / or .y coordinates outside of the visible canvas The program on bellow toggles a sprite 
// visibility each time the mouse is clicked.

// let p = sprite('adventure_girl.idle', 400, 300, 0.5);

// function mouseClicked()
// {
//     p.visible = !p.visible;
// }


// // REMOVING A SPRITE
// To permanently remove a sprite from the program, use the .remove() method on the sprite. 
// This is useful for sprites just as destroyed enemies, collected items, etc.

// You can also make a sprite auto-remove after a certain number of frames using the .life property. 
// This is useful for objects such as bullets, rockets, etc. that you shoot and forget about them. 
// Collectibles can make use of this property. By default this property has value -1 (disabled).

// See program on the left for a quick example on how to use .remove() and .life for sprites.

// Reminder: The first preload instruction is used to load the sound files before the program starts. 
// This is because the program makes use of dynamically specified sound effects using the sound function.

// preload("male_1", "male_2", "male_3", "male_4", "male_5", "male_6", "male_7", "male_8", "male_9", "male_10");

// let score = 0;

// for(let i = 0; i < 10; i++)
// {
//     let coin = sprite('coin.bronze', random(100, 700), random(50, 550), 0.5);
	
// 	// Make the coin autoremove itself
//     AT 60 FRAMES PER SECOND 100 FRAMES WILL BE JUST UNDER 2 SECONDS
//     coin.life = randomInt(100, 300);
	
//     coin.onMousePressed = coin_onMousePressed;
// }

// function coin_onMousePressed(sender)
// {
//     sender.remove();
//     score++;
    
//     sound("male_" + score);
// }


// COLLISIONS
// There are 4 different methods to verify if sprites are colliding. They have a slightly different behavior so please 
// make sure you select the right method for your code:

// sprite.collide(target, callback);  Sprite can't overlap with target
// sprite.displace(target, callback);  Sprite pushes target
// sprite.overlap(target, callback);  Sprite overlaps on top of target as though on higher depth
// sprite.bounce(target, callback);  Sprite can be pushed by target  UNSURE HOW TO GET TWO TARGETS PUSH EACH OTHER
// When called, some of these methods are automatically displacing the sprites, others are impacting their trajectories. 
// Play with these methods to discover their behaviors!

// Parameters:

// target – this is a reference to the other sprite or group of sprites (more about groups later)
// callback – this is optional, but useful in some cases.
// These methods returns a Boolean indicating if the collision happened.



// SPRITE GROUPS
// In games with multiple sprites of the same kind, it is sometimes useful to group various sprites in a single group. 
// In this way you can manipulate them consistently.

// A very simple way to create a group is to use a plain JavaScript array.

// However, in more complex scenarios it is recommended to use a Group object, 
// created with new Group() to store these related sprites. Think of a Group as an array with extended methods.

// Main methods of a group are:

// .add(sprite) - Add a sprite to the group
// .remove(sprite) – Removes a sprite from the group
// .clear() - Removes sprites from group. Does not remove sprites from program.
// .contains(sprite) - Check if the specified sprite is in the group
// Note: Certain methods, such as sprite collision methods can operate on an entire group of sprites, 
// rather than on a single sprite (as explained on the previous page)

// let player = sprite('game.happy', 400, 300, 0.5);
// let coins = new Group();

// for(let i = 0; i < 10; i++)
// {
//     let coin = sprite('coin.gold', random(100, 700), random(50, 550), 0.5);
    
//     // add coin to the group
//     coins.add(coin);
// }

// function loop()
// {
//     clear();
//     text("Coins left: " + coins.length, 10, 30);
    
//     player.x = mouseX;
//     player.y = mouseY;
    
//     // check collision against the group
//     player.collide(coins, onCollision)  THIS SETS COLLISION DETECTION TO COINS SPECIFICALLY IN THE GROUP
// }

// function onCollision(player, coin)
// {
//     // remove coin from the group
//     coins.remove(coin); THIS REMOVES THE COLLISION DETECTION SINCE I'TS NO LONGER PART OF THE GROUP
//     coin.velocity.y = -12;
//     coin.life = 100;
//     sound('spaceTrash1');
// }

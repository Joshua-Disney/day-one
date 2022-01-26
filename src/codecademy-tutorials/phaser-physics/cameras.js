// Cameras
// In order to grant the joy of exploration and discovery it becomes important for the game world to be larger 
// than what a player immediately sees upon entering the game. A useful way to convince the player of your game 
// of this is by employing the use of cameras. A camera is a view of the game world. Some games (those with 
//     mini-maps, for instance) employ multiple cameras, but we will be focusing on just using one.

// Phaser creates a camera by default, which we have so far been using without any customization. Its bounds are 
// set to be the same as the dimensions for your Game given in config. It also does not move at all, but we will 
// be changing both of those things for our platformer.

// create() {
//   gameState.player = this.physics.add.sprite(100, 100, 'codey');
//   this.cameras.main.setBounds(0, 0, 2000, 600);
//   this.cameras.main.startFollow(gameState.player);
// }
// Above we modified the default camera, this.cameras.main, to make it aware that the world is larger than our 
// current window. We do this by calling .setBounds() and giving bounds larger than our config width and height. 
// We also tell the camera to follow along our main player by calling .startFollow() and passing it the sprite 
// we want to follow.

// The .startFollow() method also has several additional optional arguments you can pass which we can use to 
// customize how fast the camera locks-on to its target and whether the target should be in the center of the 
// screen exactly or offset somewhat. Here are the arguments for .startFollow(): (target, roundPixels, lerpX, 
// lerpY, offsetX, offsetY).

// target is the sprite for the camera to follow
// roundPixels is a boolean that effects rendering, set it to true if you’re experiencing camera jitter.
// lerpX and lerpY are the speed (between 0 and 1, defaults to 1) with which the camera locks on to the target. 
// A lower lerp speed will have the effect that your character is moving much faster than the camera.
// offsetX and offsetY is the offset for the camera. Set offsetX to something like -200 will keep Codey on the left 
// side of the screen (so that more of the level ahead is on the screen).



// Shaking the Camera
// Camera shake is an indispensible effect in the modern video game. It hints to the player that something jarring and 
// surprising is happening. When a player falls down we’re going to start the level over again, but shake the camera a 
// little bit as if to say “let’s try that a little differently next time.”

// Camera shake is an easy effect to add in Phaser, just call the .shake() method on the camera. .shake() can take the following arguments:

// duration the length of the shake
// intensity how strong the camera shakes
// force whether or not to start the effect from the beginning if it has already started
// callback the function to call each frame while the shake is happening. Accepts two arguments: a reference to the camera and then a duration from 0-1
// context the context for the previous function, defaults to the Scene
// This command:

// this.cameras.main.shake(100, .8)
// Will shake the main camera fairly vigorously for 100 milliseconds. Whereas this command:

// this.cameras.main.shake(200, .3, true, function(camera, progress) {
//   if (progress > .5) {
//     gameState.player.setTint(0xff0000);
//   }
// });
// Will lighlty shake the camera for 200 milliseconds. Halfway through the shake’s completion it will turn gameState.player red.




// Fading Out
// Fading out of a Scene seems like a fitting transition. A cue taken from the film industry, fade-out offers a much 
// softer effect than the shake but is as concise in Phaser. .fade() is a camera method that takes the following arguments:

// duration, the length of the fade in milliseconds.
// red, the 0-255 integer value of how red the fadeout color is.
// green, the 0-255 integer value of how green the fadeout color is.
// blue, the 0-255 integer value of how blue the fadeout color is.
// force, starts the fadeout over if it’s already been started.
// callback, the callback to use during the fadeout effect.
// context, the context to use for the callback function (defaults to the Scene the camera is in).
// We can call:

// this.cameras.main.fade(100, 255, 255, 255, false, function(camera, progress) {
//   if (progress > .5) {
//     gameState.player.x = 5;
//   }
// });
// In the above code the camera fades to white very quickly. Halfway through the fadeout, the gameState.player gets moved 
// 5 pixels from the left edge of the game.



// Parallax Scrolling
// We’re going to create the illusion of depth in our frozen tundra world using something called a parallax effect. Parallax 
// motion refers to an observable real-world phenomenon that things closer to us move faster than things further from us. A 

// In order to simulate this motion, we can to create three different background layers of different sizes. Why do they need 
// to be different sizes? Since we’ll be scrolling some of our “nearer” layers very fast and some of our “farther” layers very 
// low, we will need our “nearer” layers to be longer or else they will scroll off the screen.



// Determining The Scroll Factor
// In order to accomplish this effect, we’ll update the scroll factor of each of our background layers. The scroll factor is how 
// fast an object scrolls (with respect to our camera). By default, all GameObjects have a scroll factor of 1 (scrolls as fast as 
// everything else). A static object that we always want on-screen should have a scroll factor of 0. We can set the scroll factor 
// with the GameObject method .setScrollFactor(). But what should we set the scroll factor to?

// The scroll factor is the rate we want our background to move. There are three numbers that we’ll use to determine it: the width 
// of the game, the width of the background, and the width of the window itself. How do we determine the rate that a smaller 
// background should move so that the entire background only shifts as fast as the player moves across the level? With a formula!

// const windowWidth = config.width;
// const gameWidth = 2000; // the size of the largest background
// const someBackgroundWidth = gameState.someBackground.getBounds().width
 
// const someBackgroundScrollFactor = (someBackgroundWidth - windowWidth) / (gameWidth - windowWidth)
// gameState.someBackground.setScrollFactor(someBackgroundScrollFactor)



// Changing the Weather
// If a long journey goes on for several days, how do we communicate that length to the folks playing our game? We’re going to use a 
// few strategies to add in concepts of ambience, lighting, time of day, and weather to our game to make these same assets feel like 
// the world they’re apart of turns and changes like our own.

// The sky’s color is the easiest thing for us to change, by changing the background color of the game. Since we actually want to update 
// the color of the sky multiple times within our single game, we can make a new “background”, a rectangle with the same dimensions as 
// our canvas. We will be able to update the color of our new background with the appropriate color of the sky.




// Changing the Lighting
// Different light colors things differently, so it will be a stronger effect if we color our world for each time of day. In order to convey 
// this effect we are going to use the .setTint() method on each of our GameObjects. .setTint() performs a color multiplication effect that 
// changes each pixel in your image consistently, in a way similar to having a colored light cast on it. It’s a lot like looking at the same 
// thing through a pair of sunglasses. When we do this, we can contrast the effect of a strong overhead sun during the afternoon, with, say, 
// a lavender light present in the early morning. At night, we can just make everything a little bit darker.


// Making It Snow
// Where does all of the snow in our game world come from? We assume it falls from the sky, but how? In order to enhance the realism of our 
// game we want the snow to fall as the player crosses through the tundra. In order to do that we’ll need to use a Particle Emitter. A 
// Particle Emitter creates a pool of particles. A particle is a small, repeated sprite. A pool is a collection of these particles collected 
// for reuse. Instead of constantly dropping new snowflakes, we will “move” the snowflakes that have dropped already to the top of the 
// screen and drop them down again. We can add our Particle Emitter in create() like so:

// create() {
//   gameState.particles = this.add.particles('marble');
 
//   gameState.emitter = gameState.particles.createEmitter({
//     x: { min: 0, max: 200 },
//     y: 0,
//     lifespan: 2000,
//     speedY: { min:10, max: 200},
//     scale: .2,
//     quantity: 10,
//     blendMode: 'ADD'
//   })
// }
// This creates a particle emitter that uses a 'marble' asset we’ve preloaded. It creates the particles at the top of the screen and pushes 
// them down screen. It creates these “marbles” at x-coordinates between 0 and 200 and gives them variable speeds as they fall down the screen.
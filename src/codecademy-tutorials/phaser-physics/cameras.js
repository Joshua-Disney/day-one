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




class Level extends Phaser.Scene {
    constructor(key) {
      super(key);
      this.levelKey = key
      this.nextLevel = {
        'Level1': 'Level2',
        'Level2': 'Level3',
        'Level3': 'Level4',
        'Level4': 'Credits',
      }
    }
  
    preload() {
      this.load.image('platform', 'https://content.codecademy.com/courses/learn-phaser/Codey%20Tundra/platform.png');
      this.load.image('snowflake', 'https://content.codecademy.com/courses/learn-phaser/Codey%20Tundra/snowflake.png');
      this.load.spritesheet('campfire', 'https://content.codecademy.com/courses/learn-phaser/Codey%20Tundra/campfire.png',
        { frameWidth: 32, frameHeight: 32});
      this.load.spritesheet('codey', 'https://content.codecademy.com/courses/learn-phaser/Codey%20Tundra/codey.png', { frameWidth: 72, frameHeight: 90})
  
      this.load.image('bg1', 'https://content.codecademy.com/courses/learn-phaser/Codey%20Tundra/mountain.png');
      this.load.image('bg2', 'https://content.codecademy.com/courses/learn-phaser/Codey%20Tundra/trees.png');
      this.load.image('bg3', 'https://content.codecademy.com/courses/learn-phaser/Codey%20Tundra/snowdunes.png');
    }
  
    create() {
      gameState.active = true
  
      gameState.bgColor = this.add.rectangle(0, 0, config.width, config.height, 0x00ffbb).setOrigin(0, 0);
      this.createStars();
      this.createParallaxBackgrounds();
  
      gameState.player = this.physics.add.sprite(125, 110, 'codey').setScale(.5);
      gameState.platforms = this.physics.add.staticGroup();
  
      this.createAnimations();
  
      this.createSnow();
  
      this.levelSetup();
  
      this.cameras.main.setBounds(0, 0, gameState.bg3.width, gameState.bg3.height);
      this.physics.world.setBounds(0, 0, gameState.width, gameState.bg3.height + gameState.player.height);
  
      this.cameras.main.startFollow(gameState.player, true, 0.5, 0.5)
      gameState.player.setCollideWorldBounds(true);
  
      this.physics.add.collider(gameState.player, gameState.platforms);
      this.physics.add.collider(gameState.goal, gameState.platforms);
  
      gameState.cursors = this.input.keyboard.createCursorKeys();
  
    }
  
    createPlatform(xIndex, yIndex) {
      // Creates a platform evenly spaced along the two indices.
      // If either is not a number it won't make a platform
        if (typeof yIndex === 'number' && typeof xIndex === 'number') {
          gameState.platforms.create((220 * xIndex),  yIndex * 70, 'platform').setOrigin(0, 0.5).refreshBody();
        }
    }
  
    createSnow() {
      gameState.particles = this.add.particles('snowflake');
  
      gameState.emitter = gameState.particles.createEmitter({
        x: {min: 0, max: config.width * 2 },
        y: -5,
        lifespan: 2000,
        speedX: { min:-5, max: -200 },
        speedY: { min: 200, max: 400 },
        scale: { start: 0.6, end: 0 },
        quantity: 10,
        blendMode: 'ADD'
      })
  
      gameState.emitter.setScrollFactor(0);
    }
  
    createAnimations() {
      this.anims.create({
        key: 'run',
        frames: this.anims.generateFrameNumbers('codey', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      });
  
      this.anims.create({
        key: 'idle',
        frames: this.anims.generateFrameNumbers('codey', { start: 4, end: 5 }),
        frameRate: 10,
        repeat: -1
      });
  
      this.anims.create({
        key: 'jump',
        frames: this.anims.generateFrameNumbers('codey', { start: 2, end: 3 }),
        frameRate: 10,
        repeat: -1
      })
  
      this.anims.create({
        key: 'fire',
        frames: this.anims.generateFrameNumbers('campfire'),
        frameRate: 10,
        repeat: -1
      })
    }
  
    createParallaxBackgrounds() {
      gameState.bg1 = this.add.image(0, 0, 'bg1');
      gameState.bg2 = this.add.image(0, 0, 'bg2');
      gameState.bg3 = this.add.image(0, 0, 'bg3');
  
      gameState.bg1.setOrigin(0, 0);
      gameState.bg2.setOrigin(0, 0);
      gameState.bg3.setOrigin(0, 0);
  
      const game_width = parseFloat(gameState.bg3.getBounds().width)
      gameState.width = game_width;
      const window_width = config.width
  
      const bg1_width = gameState.bg1.getBounds().width
      const bg2_width = gameState.bg2.getBounds().width
      const bg3_width = gameState.bg3.getBounds().width
  
      gameState.bgColor .setScrollFactor(0);
      gameState.bg1.setScrollFactor((bg1_width - window_width) / (game_width - window_width));
      gameState.bg2.setScrollFactor((bg2_width - window_width) / (game_width - window_width));
    }
  
    levelSetup() {
      for (const [xIndex, yIndex] of this.heights.entries()) {
        this.createPlatform(xIndex, yIndex);
      } 
      
      // Create the campfire at the end of the level
      gameState.goal = this.physics.add.sprite(gameState.width - 40, 100, 'campfire');
  
      this.physics.add.overlap(gameState.player, gameState.goal, function() {
        this.cameras.main.fade(800, 0, 0, 0, false, function(camera, progress) {
          if (progress > .9) {
            this.scene.stop(this.levelKey);
            this.scene.start(this.nextLevel[this.levelKey]);
          }
        });
      }, null, this);
  
      this.setWeather(this.weather);
    }
  
    update() {
      if(gameState.active){
        gameState.goal.anims.play('fire', true);
        if (gameState.cursors.right.isDown) {
          gameState.player.flipX = false;
          gameState.player.setVelocityX(gameState.speed);
          gameState.player.anims.play('run', true);
        } else if (gameState.cursors.left.isDown) {
          gameState.player.flipX = true;
          gameState.player.setVelocityX(-gameState.speed);
          gameState.player.anims.play('run', true);
        } else {
          gameState.player.setVelocityX(0);
          gameState.player.anims.play('idle', true);
        }
  
        if (Phaser.Input.Keyboard.JustDown(gameState.cursors.space) && gameState.player.body.touching.down) {
          gameState.player.anims.play('jump', true);
          gameState.player.setVelocityY(-500);
        }
  
        if (!gameState.player.body.touching.down){
          gameState.player.anims.play('jump', true);
        }
  
        if (gameState.player.y > gameState.bg3.height) {
          this.cameras.main.shake(240, .01, false, function(camera, progress) {
            if (progress > .9) {
              this.scene.restart(this.levelKey);
            }
          });
        }
      }
    }
    createStars() {
      gameState.stars = [];
      function getStarPoints() {
        const color = 0xffffff;
        return {
          x: Math.floor(Math.random() * 900),
          y: Math.floor(Math.random() * config.height * .5),
          radius: Math.floor(Math.random() * 3),
          color,
        }
      }
      for (let i = 0; i < 200; i++) {
        const { x, y, radius, color} = getStarPoints();
        const star = this.add.circle(x, y, radius, color)
        star.setScrollFactor(Math.random() * .1);
        gameState.stars.push(star)
      }
    }
  
    setWeather(weather) {
      const weathers = {
  
        'morning': {
          'color': 0xecdccc,
          'snow':  1,
          'wind':  20,
          'bgColor': 0xF8c3aC,
        },
  
        'afternoon': {
          'color': 0xffffff,
          'snow':  1,
          'wind': 80,
          'bgColor': 0x0571FF,
        },
  
        'twilight': {
          'color': 0xccaacc,
          'bgColor': 0x18235C,
          'snow':  10,
          'wind': 200,
        },
  
        'night': {
          'color': 0x555555,
          'bgColor': 0x000000,
          'snow':  0,
          'wind': 0,
        },
      }
      let { color, bgColor, snow, wind } = weathers[weather];
      gameState.bg1.setTint(color);
      gameState.bg2.setTint(color);
      gameState.bg3.setTint(color);
      gameState.bgColor.fillColor = bgColor;
      gameState.emitter.setQuantity(snow);
      gameState.emitter.setSpeedX(-wind);
      gameState.player.setTint(color);
      for (let platform of gameState.platforms.getChildren()) {
        platform.setTint(color);
      }
      if (weather === 'night') {
        gameState.stars.forEach(star => star.setVisible(true));
      } else {
        gameState.stars.forEach(star => star.setVisible(false));
      }
  
      return
    }
  }
  
  class Level1 extends Level {
    constructor() {
      super('Level1')
      this.heights = [4, 7, 5, null, 5, 4, null, 4, 4];
      this.weather = 'afternoon';
    }
  }
  
  class Level2 extends Level {
    constructor() {
      super('Level2')
      this.heights = [5, 4, null, 4, 6, 4, 6, 5, 5];
      this.weather = 'twilight';
    }
  }
  
  class Level3 extends Level {
    constructor() {
      super('Level3')
      this.heights = [6, null, 6, 4, 6, 4, 5, null, 4];
      this.weather = 'night';
    }
  }
  
  class Level4 extends Level {
    constructor() {
      super('Level4')
      this.heights = [4, null, 3, 6, null, 6, null, 5, 4];
      this.weather = 'morning';
    }
  }
  
  class Credits extends Phaser.Scene {
    constructor() {
      super('Credits')
    }
  
    preload() {
      this.load.spritesheet('codey_sled', 'https://content.codecademy.com/courses/learn-phaser/Codey%20Tundra/codey_sled.png', { frameWidth: 81, frameHeight: 90 });
    }
  
    create() {
      gameState.player = this.add.sprite(config.width / 2, config.height / 2, 'codey_sled');
  
      this.anims.create({
        key: 'sled',
        frames: this.anims.generateFrameNumbers('codey_sled'),
        frameRate: 10,
        repeat: -1
      })
  
      gameState.player.angle = 20;
    }
  
    update() {
      gameState.player.anims.play('sled', true);
    }
  }
  
  const gameState = {
    speed: 240,
    ups: 380,
  };
  
  const config = {
    type: Phaser.AUTO,
    width: 500,
    height: 600,
    fps: {target: 60},
    backgroundColor: "b9eaff",
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 800 },
        enableBody: true,
  
      }
    },
    scene: [Level1, Level2, Level3, Level4, Credits]
  };
  
  const game = new Phaser.Game(config);

//   REMEMBER TO EDIT THE CREDIT SCENE
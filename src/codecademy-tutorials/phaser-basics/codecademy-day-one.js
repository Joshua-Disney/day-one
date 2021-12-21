function create() {
    // Change "Codey's Adventures\n  in Code World" to the name of your game
    this.add.text(50, 100, "Diszey's Adventures\n  in Phiserland", { font: "40px Times New Roman", fill: "#ffa0d0"});
  
    // Change "by Codecademy" to your name!
    this.add.text(130, 300, "by Diszey", { font: "20px Times New Roman", fill: "#ffa0d0"});
  }
  
  const config = {
      type: Phaser.AUTO,
      width: 450,
      height: 600,
      backgroundColor: "#5f2a55",
      scene: {
      create
      }
  };
  
  const game = new Phaser.Game(config);


//   CIRCLES
function create() {
    let circle1 = this.add.circle(50, 100, 90, 0xFFF070);
    let circle2 = this.add.circle(95, 300, 80, 0xFF0000);
    let circle3 = this.add.circle(200, 200, 100, 0x9F00D0);
    let circle4 = this.add.circle(300, 400, 10, 0x00E030);
  
    // Add in a circle here!
    let circle5 = this.add.circle(123,456, 111,0x00E333)
  
  }
  
  const config = {
      type: Phaser.AUTO,
      width: 450,
      height: 600,
      scene: {
      create
      }
  }
  
  const game = new Phaser.Game(config)
  

// PRELOAD AND RENDER SPRITE
function preload() {
    // Load in the sprite here!
    this.load.image("codey", "https://content.codecademy.com/courses/learn-phaser/codey.png")
  }
  
  function create() {
    // Create a sprite game object here!
    this.add.sprite(225, 300, "codey")
  }
  
  const config = {
      type: Phaser.AUTO,
      width: 450,
      height: 600,
      backgroundColor: "#5f2a55",
      scene: {
      create,
      preload
      }
  }
  
  const game = new Phaser.Game(config)

  
//   PRELOAD AND RENDER BACKGROUND
function preload() {
    // Load in the background image here!
    this.load.image("sky", "https://content.codecademy.com/courses/learn-phaser/sky.jpg")
  }
  
  function create() {
    // Put the background image in the scene here!
  this.add.image(100, 300, "sky")
  }
  
  const config = {
      type: Phaser.AUTO,
      width: 450,
      height: 600,
      backgroundColor: "#5f2a55",
      scene: {
      create,
      preload
      }
  }
  
  const game = new Phaser.Game(config)

  
// SETTING CONFIG AND PASSING IT INTO PHASER AS A GAME OBJECT
const config = {
    width : 400,
    height : 600,
    backgroundColor : 0x0000
  }
  
const game = new Phaser.Game(config)


// ADDING CREATE TO CONFIG
// Create a create() function here:
function create() {
    this.add.text(125, 300, "This is text! :O")
  }
  
  const config = {
      type: Phaser.AUTO,
      width: 450,
      height: 600,
      backgroundColor: "#a0a0dd",
    // Add in the scene information in the config here:
    scene: { create }
  }
  
  const game = new Phaser.Game(config)

  
//   BUILDING UPDATE FUNCTION AND ADDING TO CONFIG
let codey;

function preload() {
  this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');
}

function create() {
  codey = this.add.sprite(30, 200, 'codey')
}

// Create your update() function here
function update() {
  codey.x += 1
}

const config = {
	type: Phaser.AUTO,
	width: 400,
	height: 400,
	backgroundColor: "#5f2a55",
	scene: {
    preload,
    create,
    update
    // Include update here!
	}
}

const game = new Phaser.Game(config)


// CREATING GAMESTATE AND UPDATING IT WITHIN SCOPE
// Define "gameState" here
const gameState = {}

function create() {
  // Create a circle and assign it to gameState.circle here
  gameState.circle = this.add.circle(225, 0, 100, 0xff0000)
}

function update() {
  // Update the circle in gameState.circle here
  gameState.circle.y += 1
}

const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#99ff99",
	scene: {
    create,
    update
	}
}

const game = new Phaser.Game(config)


// INTERACTIVE GAMEPLAY
const gameState = {
    onColor: 0xaaffaa,
    offColor: 0xffaaaa,
  }
  
  function create() {
    gameState.rect1 = this.add.rectangle(200, 100, 100, 100, gameState.onColor);
    gameState.rect2 = this.add.rectangle(200, 300, 100, 100, gameState.offColor);
    
    // add the switchedOn state here
    gameState.switchedOn = true
    // // set gameState.rect2 as interactive here
    gameState.rect1.setInteractive()
    gameState.rect2.setInteractive()
    // create the pointerup listener for rect2 here
    gameState.rect1.on("pointerup", function() {
      gameState.switchedOn = true
    })
    gameState.rect2.on("pointerup", function() {
      gameState.switchedOn = false
    })
   
  }
  
  function update() {
    if (gameState.switchedOn === true) {
      gameState.rect1.fillColor = gameState.onColor,
      gameState.rect2.fillColor = gameState.offColor
    } else {
      gameState.rect1.fillColor = gameState.offColor,
      gameState.rect2.fillColor = gameState.onColor
    }
  }
  
  const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 450,
    backgroundColor: 0x333333,
    scene: {
      create,
      update
    }
  }
  
  const game = new Phaser.Game(config)

  // USE PHISER'S CREATECURSORKEYS AND ISDOWN FUNCTIONS TO WATCH FOR KEYPRESS
  const gameState = {}

  function preload() {
    this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');
  }
  
  function create() {
    gameState.codey = this.add.sprite(150, 200, 'codey')
    // Set cursor keys here!
    gameState.cursors = this.input.keyboard.createCursorKeys()
  }
  
  function update() {
    // Update based on keypress here!
   if (gameState.cursors.right.isDown) {
     gameState.codey.x += 5
   } else if (gameState.cursors.left.isDown) {
     gameState.codey.x -= 5
   } else if (gameState.cursors.space.isDown) {
     gameState.codey.y -= 5
   } else if (gameState.cursors.down.isDown) {
     gameState.codey.y += 5
   }
  }
  
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: "#5f2a55",
    scene: {
      preload,
      create,
      update
    }
  }
  
  const game = new Phaser.Game(config)



// ADD AUDIO FILES AND PLAY THEM ON RENDER OR ON EVENTS
const gameState = {}

function preload() {
  // load our 'incredible' sound here!
    this.load.audio('incredible', 'https://content.codecademy.com/courses/learn-phaser/incredible.mp3')

    this.load.audio('awesome', 'https://content.codecademy.com/courses/learn-phaser/reallyawesome.mp3')

}

function create() {
  // add our 'incredible' sound to our scene here!
  gameState.incredible = this.sound.add('incredible')

  gameState.awesome = this.sound.add('awesome')
  
  // Display "Incredible" and "Really, really awesome" buttons
  gameState.incredibleBox = this.add.rectangle(200, 150, 300, 200, 0xdadaaa)
  gameState.awesomeBox = this.add.rectangle(200, 400, 300, 200, 0xaadada)
  gameState.incredibleText = this.add.text(150, 135, "Incredible", { fill: "#222222", font: "20px Times New Roman"})
  gameState.awesomeText = this.add.text(110, 385, "Really, really awesome", { fill: "#222222", font: "20px Times New Roman"})
  gameState.incredibleBox.setInteractive();
  gameState.awesomeBox.setInteractive();

  // add a 'pointerup' handler to incredibleBox here:
  gameState.incredibleBox.on('pointerup', function() {
    gameState.incredible.play()
  })
  
  gameState.awesomeBox.on('pointerup', function() {
    gameState.awesome.play()
  })
}

const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 600,
  backgroundColor: "#333333",
  scene: {
    preload,
    create
  }
}

const game = new Phaser.Game(config)

// PUT IT ALL TOGETHER FROM SCRATCH
const gameState = {}

function preload() {
  this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png')
}

function create() {
  gameState.codey = this.add.sprite(300, 300, 'codey')
  gameState.cursors = this.input.keyboard.createCursorKeys()
}

function update() {
  if (gameState.cursors.down.isDown) {
    gameState.codey.y += 1
  } else if (gameState.cursors.up.isDown) {
    gameState.codey.y -= 1
  } else if (gameState.cursors.right.isDown) {
    gameState.codey.x += 1
  } else if (gameState.cursors.left.isDown) {
    gameState.codey.x -= 1
  }
}

const config = {
  width: 600,
  height: 600,
  backgroundColor: '#7ef9ff',
  scene: {
    preload,
    create,
    update
  }
}

const game = new Phaser.Game(config)
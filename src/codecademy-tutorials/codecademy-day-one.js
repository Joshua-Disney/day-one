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
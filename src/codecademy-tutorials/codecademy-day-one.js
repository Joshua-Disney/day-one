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
  
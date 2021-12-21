// Brings in a player that drops from gravity, debug shows hitbox and trajectory
function preload() {
    this.load.image('bug1', 'https://content.codecademy.com/courses/learn-phaser/physics/bug_1.png');
    this.load.image('bug2', 'https://content.codecademy.com/courses/learn-phaser/physics/bug_2.png');
    this.load.image('bug3', 'https://content.codecademy.com/courses/learn-phaser/physics/bug_3.png');
    this.load.image('platform', 'https://content.codecademy.com/courses/learn-phaser/physics/platform.png');
    this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/physics/codey.png');
  }
  
  function create() {
       this.physics.add.sprite(150, 100, 'codey');
  }
  
  function update() {
  }
  
  const config = {
    type: Phaser.AUTO,
    width: 450,
    height: 500,
    backgroundColor: "b9eaff",
    physics: { 
      default: 'arcade', 
      arcade: {
        gravity: { 
          y: 300
        },
        debug: true
      } 
    },
    scene: {
      preload,
      create,
      update
    },
    // Add the physics property below: 
    
  };
  
  const game = new Phaser.Game(config);
  
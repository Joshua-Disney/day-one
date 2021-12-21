// Code will go here

// Make each part of the pegasus interactive and change it's color on pointer up
let gameState = {
    palette: [0xa7f66c, 0x844cc5, 0x66e2e2, 0x4c7df3, 0xffc836, 0xec32fc],
    selectedColor: 0x844cc5,
  }
  
  function create ()
  {
    let pegasusShapes = getPegasusShapes(this);
    let staticShapes  = getPegasusStaticShapes(this); 
    for (let shape of pegasusShapes) {
      shape.smoothness = 25;
      shape.strokeColor = 0x000000;
      shape.isStroked = true;
      shape.setOrigin(0, 1);
      shape.lineWidth = 2
      
      /* make each shape interactive here */
      shape.setInteractive()
      /* add a pointerup handler here */
      shape.on('pointerup', function() {
        this.fillColor = gameState.selectedColor
      })
    }
  
    // Setting up palette circles
    let paletteBox = this.add.rectangle(0, 475, 440, 75, 0x37c3be);
    paletteBox.setOrigin(0, 0)
    gameState.paletteCircles = []
    const spacing = 440 / gameState.palette.length;
    const translation = spacing / 2;
  
    for (let i = 0; i < gameState.palette.length; i++) {
      // Create each of the palette circles with one of the colors from the palette
      let color = gameState.palette[i];
      let paletteCircle = this.add.circle(translation + spacing * i, 515, 22, color);
      
      paletteCircle.strokeColor = 0x000000;
      paletteCircle.isStroked = true;
      paletteCircle.lineWidth = 2;
    }
  
  }
  
  function getPegasusShapes(scene) {
    return [body(scene), hindLeg(scene), rearLeg(scene), rearHoofRight(scene), rearHoofLeft(scene), frontHoofRight(scene), frontHoofLeft(scene), underWing(scene), wing(scene), tail(scene), hair(scene), mane(scene)]
  }
  
  function getPegasusStaticShapes(scene) {
    eye(scene) 
    nostril(scene)
  }
  
  const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-game',
    backgroundColor: 0xffc836,
    width: 440,
    height: 550,
    scene: {
      create,
    }
  };
  
  const game = new Phaser.Game(config);
//   Pegasus body defined below code, didn't copy

// Adding a third parameter to the event handler gives access to outside variables.
function create ()
{
  let pegasusShapes = getPegasusShapes(this);
  let staticShapes  = getPegasusStaticShapes(this); 
  for (shape of pegasusShapes) {
    shape.smoothness = 25;
    shape.strokeColor = 0x000000;
    shape.isStroked = true;
    shape.setOrigin(0, 1);
    shape.lineWidth = 2;
    shape.setInteractive();
    shape.on('pointerup', function() { 
      this.fillColor = gameState.selectedColor;
    });
  }

  // Setting up palette circles
  let paletteBox = this.add.rectangle(0, 475, 440, 75, 0x37c3be);
  paletteBox.setOrigin(0, 0);
  gameState.paletteCircles = [];
  const spacing = 440 / gameState.palette.length;
  const translation = spacing / 2;

  for (let i = 0; i < gameState.palette.length; i++) {
    // Create each of the palette circles with one of the colors from the palette
    let color = gameState.palette[i];
    let paletteCircle = this.add.circle(translation + spacing * i, 515, 22, color);
    
    paletteCircle.strokeColor = 0x000000;
    paletteCircle.isStroked = true;
    paletteCircle.lineWidth = 2;

    /* add a click handler for each palette circle here */
    paletteCircle.setInteractive()
    paletteCircle.on('pointerup', function() {
      gameState.selectedColor = this.color
    }, { color })
  }

}

//  setBlendMode can change the opacity.  Good for making ghosts.
shape.on('pointerover', function() {
    this.setBlendMode(Phaser.BlendModes.SCREEN)
  })

  shape.on('pointerout', function() {
    this.setBlendMode(Phaser.BlendModes.NORMAL)
  })
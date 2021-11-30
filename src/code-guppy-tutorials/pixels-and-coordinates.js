// In CodeGuppy the canvas is 800 pixels wide and 600 pixels high
// This means we have 800 x 600 = 480,000 total pixels on the canvas.
// We refer to these numbers as the resolution of the canvas.

const { findRenderedDOMComponentWithClass } = require("react-dom/test-utils")

// CodeGuppy considers the first pixel as being the one in the upper-left corner. This pixel has coordinates (0, 0).
// CodeGuppy considers the first pixel as being the one in the upper-left corner. This pixel has coordinates (0, 0).

// // Corner points
// point(0, 0);
// point(799, 0);
// point(0, 599);
// point(799, 599);

// // Center point
// point( 400, 300 );


// METHODS

// point(x,y)
// x is the x axis starting at zero going to the right
// y is the y axis starting at zero going down from the top
// point(20,30)
// point 20 to the right and 30 down from the top left corner

// circle(x,y,z)
// x is the x coordinate for the center of the circle
// y is the y coordinate for the center of the circle
// z is the radius of the circle going out from the center
// circle(100, 150, 50)
// circle with center point of 100 right, 150 down, and a radius of 50

// line(x1, y1, x2, x3);
// x1 and x2 are the x axis for the start and end of the line respectively
// y1 and y2 are the y axis for the start and end of the line respectively
// DOES NOT NEED TO REST ON AN AXIS, CAN BE TILTED
// line(20, 100, 80, 100)
// line starting at x-20,y-100 60 pixels long to x-80,y-100

// rect(x, y, x-length, y-length)
// The first two parameters specify the coordinates of the top-left corner,
// the other two parameters, specify the width and height of the rectangle.
// RESTS ON AXIS, CAN NOT BE TILTED
// rect(250, 200, 300, 200);
// rectangle with top left coordinate at x-250, y-200 with a width of 300 pixels to the right and height of 200 pixels down

// HOUSE DRAWING
// main house
// rect(250,250,300,300)
// door
// rect(375,450,50,100)
// left window
// rect(275,300,100,80)
// line(325,300,325,380)
// line(275,340,375,340)
// right window
// rect(425,300,100,80)
// line(475,300,475,380)
// line(425,340,525,340)
// roof
// line(250,250,400,100)
// line(400,100,550,250)
// roof window
// circle(400,190,25)
// chimney
// line(480,180,480,125)
// line(480,125,505,125)
// line(505,125,505,205)
// smoke
// circle(520,120,5)
// circle(566,100,10)
// circle(610,75,15)
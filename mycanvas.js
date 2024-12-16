
const mycanvas = document.getElementById('mycanvas');

// Canvas width and height
const width = 800;
const height = 700;
const size = 700;
mycanvas.width = width;
mycanvas.height = height;


// Radius and circle center
const trackCenter = { x: width / 2, y: height / 2 }; // Center based on canvas size
const trackRadius = 100;


// Draw the track circle centered on the canvas
const ctx = mycanvas.getContext('2d');
const track = new Track(trackCenter, trackRadius);
track.draw(ctx);


const mycanvas = document.getElementById('mycanvas');

// Canvas width and height
const width = 1000;
const height = 800;
mycanvas.width = width;
mycanvas.height = height;

// Radius and circle center
const trackCenter = { x: width / 2, y: height / 2 }; // Center the circle
const trackRadius = 200;
//const ballRadius = 50;
//const ballSpeed = 5; // Speed in pixels per second


// ball radius function
//const ball = new Track(track, ballRadius, ballSpeed);


// Draw the track circle
const ctx = mycanvas.getContext('2d');
const track = new Track(trackCenter, trackRadius);
track.draw(ctx);

// Draw the ball
//ball.draw(ctx);
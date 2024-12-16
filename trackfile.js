// Track class to represent the track circle
class Track {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }

    // Draw the track circle centered on the canvas
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "white";
        ctx.stroke();
    }
}

const mycanvas = document.getElementById('mycanvas');

// Canvas width and height
const width = 1000;
const height = 800;
mycanvas.width = width;
mycanvas.height = height;

// Radius and circle center
const trackCenter = { x: width / 2, y: height / 2 }; // Center the circle
const trackRadius = 200;


// Draw the track circle
const ctx = mycanvas.getContext('2d');
const track = new Track(trackCenter, trackRadius);
track.draw(ctx);

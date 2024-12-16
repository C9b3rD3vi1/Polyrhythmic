const mycanvas = document.getElementById('mycanvas');

// Canvas width and height
const width = 900;
const height = 700;
mycanvas.width = width;
mycanvas.height = height;

// Beats and BPM (no changes here)
const beats = 4;
const bpm = 120;
const noteDuration = 60 / bpm;
const notesPerBeat = 4;

let currentBeat = 0;
let currentNote = 100;

// Radius and circle center
const trackCenter = { x: width / 2, y: height / 2 }; // Center based on canvas size
const trackRadius = 100;


// Draw the track circle centered on the canvas
const ctx = mycanvas.getContext('2d');
const track = new Track(trackCenter, trackRadius);
track.draw(ctx);

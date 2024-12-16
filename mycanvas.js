
const mycanvas = document.getElementById('mycanvas');

const size = 700
const width = 900;
const height = 500;

mycanvas.width = width;
mycanvas.height = height;

const beats = 4;
const bpm = 120;
const noteDuration = 60 / bpm;
const notesPerBeat = 4;

let currentBeat = 0;
let currentNote = 100;

const trackCentre = {x: size / 2, y: size / 2}
const trackRadius = 100;


const ctx = mycanvas.getContext('2d');
const track = new Track(trackCentre, trackRadius)
track.draw(ctx);



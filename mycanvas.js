
const mycanvas = document.getElementById('mycanvas');
const ctx = mycanvas.getContext('2d');
const width = 700;
const height = 500;

mycanvas.width = width;
mycanvas.height = height;

const beats = 4;
const bpm = 120;
const noteDuration = 60 / bpm;
const notesPerBeat = 4;

let currentBeat = 0;
let currentNote = 100;


function drawLine(x1, y1, x2, y2, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

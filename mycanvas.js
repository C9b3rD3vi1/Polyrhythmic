
const mycanvas = document.getElementById('mycanvas');
const ctx = mycanvas.getContext('2d');

const width = mycanvas.width;
const height = mycanvas.height;

const beats = 4;
const bpm = 120;
const noteDuration = 60 / bpm;
const notesPerBeat = 4;

let currentBeat = 0;
let currentNote = 0;

function drawLine(x1, y1, x2, y2, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

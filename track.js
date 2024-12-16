
class Track{
    constructor(center, radius){
        this.center = center;
        this.radius = radius;
    }

    // Draw the track circle centered on the canvas
    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2, true);   
        ctx.strokeStyle = "white";
        ctx.stroke();
    }
}
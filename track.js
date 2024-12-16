
class Track{
    constructor(centre, radius){
        this.centre = centre;
        this.radius = radius;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.centre.x, this.centre.y, this.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = "white";
        ctx.stroke();
    }
}
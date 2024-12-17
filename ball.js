
class Ball{
    constructor(track, radius, speed){
        this.track = track;
        this.radius = radius;
        this.speed = speed;
        this.offset = 0;
        this.center = this.track.getPosition(this.offset)
    }


    getPosition(offset) {
        return {
            x: this.center.x + Math.cos(offset) * this.radius,
            y: this.center.y + Math.sin(offset) * this.radius
        };
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "white";
        ctx.stroke(); //
    }
    
}
// Track class to represent the track circle
class Track {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }

    getPosition(offset) {
        const angle = offset * Math.PI / 180; // Convert degrees to radians
        return {
            x: this.center.x + Math.cos(angle) * this.radius,
            y: this.center.y + Math.sin(angle) * this.radius
        };
    }


    // Draw the track circle centered on the canvas
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "white";
        ctx.stroke();
    }
}
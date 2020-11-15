class Mango {
    constructor(x, y, r) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1.0,
            density:1.5
        }
        this.image = loadImage("sprites/mango.png");
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 50, 50);
        pop();
    }
}
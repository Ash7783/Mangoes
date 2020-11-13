class Stone {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1.0,
            density: 1.2
        }
        this.image = loadImage("sprites/stone.png");
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 60, 60);
        pop();
    }
}
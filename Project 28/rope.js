class Rope {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 15
        }
        this.point = pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    fly() {
        this.body.bodyA = null;
    }
    attach(body) {
        this.body.bodyA = body;
    }
    display() {
        if (this.body.bodyA) {
            push()
            stroke("black")
            strokeWeight(3)
            line(this.point.x, this.point.y, this.body.bodyA.position.x, this.body.bodyA.position.y)
            pop()
        }
    }
}
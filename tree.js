class Tree {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 0, 0, options)
        this.image = loadImage("sprites/tree.png")
        World.add(world, this.body)
    }
    display() {
        push()
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, 500, 600)
    }
}

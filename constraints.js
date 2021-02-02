class Constraints {
    constructor(bodyA, bodyB) {
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 10
        }
        this.constraints = Constraint.create(options);
        World.add(world, this.constraints);
    }
    display() {
        var pointA = this.constraints.bodyA.position;
        var pointB = this.constraints.bodyB.position;

        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}
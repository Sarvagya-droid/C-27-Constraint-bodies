class Chain{
    constructor(bodyA, bodyB){
        var properties ={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 5
        }
        this.body = Constraint.create(properties);
        World.add(world, this.body);
    }
    display(){
        var positionA = this.body.bodyA.position;
        var positionB = this.body.bodyB.position;
        strokeWeight(4);
        stroke("red");
        line(positionA.x, positionA.y, positionB.x, positionB.y);
    }
}
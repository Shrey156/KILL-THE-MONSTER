class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 50
        }
        this.pointB = pointB;
        this.fly = Constraint.create(options);
        World.add(world, this.fly);
    }
    

    display(){
        if(this.fly.bodyA){
        var pointA = this.fly.bodyA.position;
        var pointB = this.fly.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }}
    
}
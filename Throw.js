class Throw {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.pointB = pointB;
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }

    fly(){
        this.throw.bodyA = null;
    }

    launch(body){
         this.throw.bodyA = body;
    }

    display(){

        if(this.throw.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
    }
    
}
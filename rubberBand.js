class RubberBand{
constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 10
    }
    //this.image =loadImage("polygon.png")
    this.pointB = pointB
    this.rubber = Constraint.create(options);
    World.add(world, this.rubber);
}

fly(){
    this.rubber.bodyA = null;
}
attach(body){
    this.rubber.bodyA = body;
}
display(){
    //image(this.sling1,200,20);
    //image(this.sling2,170,15);
    if(this.rubber.bodyA){
        var pointA = this.rubber.bodyA.position;
        var pointB = this.pointB;
        //push()
        strokeWeight(4);
        stroke(0,0,0);
        //if (pointA.x<250) {
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        /*line(pointA.x-20, pointA.y, pointB.x+20, pointB.y);
        image(this.sling3,pointA.x-40,pointA.y-10,20,20);*/                
        ///}
       /* else{
        line(pointA.x+30, pointA.y, pointB.x-15, pointB.y);
        line(pointA.x+30, pointA.y, pointB.x+20, pointB.y);
        image(this.sling3,pointA.x+30,pointA.y-10,20,20); 
        }*/
       
       // pop()
    }
}

}
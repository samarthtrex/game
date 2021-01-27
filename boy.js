class Boy{
    constructor(bodyA,pointB){
      var options ={
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.04,
          length: 10
      }
      this.image = loadImage("images/clipart-child-ball-4.png");
      this.pointB = pointB;
      this.boy = Constraint.create(options);
      World.add(world,this.boy);
    }

    fly(){
      this.boy.bodyA = null;
    }

    attach(body){
    this.boy.bodyA = body;
    }

    display(){
      image(this.image,200,740,200,200);
      if (this.boy.bodyA){
      var pointA = this.boy.bodyA.position;
      var pointB = this.pointB;
      push();
      stroke(48,22,8);
      strokeWeight(7);
      line(pointA.x + 70,pointA.y + 740,pointB.x + 70,pointB.y + 740);
      pop();
      }
    }
}
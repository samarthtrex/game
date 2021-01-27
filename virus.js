class Virus{
    constructor(x,y,width,height){
      var options ={
          restitution: 0.1,
          friction: 0.001
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/coronavirus_PNG7.png");
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,this.width,this,height);
    }
    update(){
        if (this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x: random(0,1900),y: random(-10,0)})
        }
    }
}
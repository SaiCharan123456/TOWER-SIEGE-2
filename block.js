class Block{
    constructor(x, y) {
        var options = {
         /* 'restitution':0.4,
          'friction':0,
          //'density':100   */ 
        }
        this.image =loadImage("block.png")
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = 30;
        this.height = 40;
        World.add(world, this.body);
        this.Visibility = 255;
      }
      display(){
        console.log(this.body.speed);
        if(this.body.speed<8){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
        
        pop();
        }
        else{
          World.remove(world,this.body);
          push()
          this.Visibility = this.Visibility - 5;
          tint(255,this.Visibility);
          image(this.image,this.body.position.x,this.body.position.y,30,40);
          pop()
        }
      }
}

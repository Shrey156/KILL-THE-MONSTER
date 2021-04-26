class Block {
    constructor(x, y) {
      var option = {
          restitution:0.8,
          friction:1,
          density:1
         
      }
      this.body = Bodies.rectangle(x, y, this.width, this.height, option);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     var angle =this.body.angle;
  
     push();
     translate(pos.x,pos.y);
     rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill(255,34,200);
      rect(0, 0, this.width, this.height);
      pop();
      
    }
  }
  
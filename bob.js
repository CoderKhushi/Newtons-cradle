class Bob {
    constructor(x, y,radius) {
      var options = {
          isStatic:true,
          restitution:0.3,
          friction:0.3,
          density:1.0
      }
      this.radius = radius; 
      this.body = Bodies.circle(x, y,radius, options);
         
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(255);
      strokeWeight(3)
      stroke("yellow")
      circle(0,0, this.radius);
      pop();
    }
  };
  
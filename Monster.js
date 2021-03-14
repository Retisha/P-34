class Monster {
    constructor(x, y,r) {
      var options = { 
        density: 1, 
        frictionAir: 0.005};
  
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      //this.height = height;
      World.add(world, this.body);
      this.image = loadImage("Monster.png")
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      image(this.image,0, 0, this.r, this.r);
      pop();
    }
  }
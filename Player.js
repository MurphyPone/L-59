class Player {
  constructor() {
    this.size = 20;
    this.x = width/2 - this.size/2;
    this.y = height/2 - this.size/2;
    this.speed = 5; //-- px/frame
  }

  render() {
    stroke(255);
    noFill();
    rect(this.x, this.y, this.size, this.size);
  }

  //movement
  moveLeft() { this.x = this.x - this.speed; }
  moveRight() { this.x = this.x + this.speed; }
  moveUp() { this.y = this.y - this.speed; }
  moveDown() { this.y  = this.y + this.speed; }

  move() {
    if( keyIsDown(65) ) { this.moveLeft(); }
    if( keyIsDown(68) ) { this.moveRight(); }
    if( keyIsDown(87) ) { this.moveUp(); }
    if( keyIsDown(83) ) { this.moveDown(); }
  }

}

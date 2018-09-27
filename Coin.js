class Coin {
  constructor(val, x, y) {
    this.val = val;
    this.x = x;
    this.y = y;
    this.size = 7
  }

  render() {
    fill(255, 222, 51);
    ellipse(this.x, this.y, this.size, this.size);
  }
}

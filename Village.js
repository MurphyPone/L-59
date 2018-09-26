class Village {
  constructor() {
    this.population = 50;
    this.skills = [];
    this.gold = 0;
    this.religion = 0;
    this.science = 0;
  }

  render() {
    let xSize = width - 20;
    let ySize = height - 20;

    fill(255, 50);
    stroke(255, 0, 0);
    rect(20, 20, xSize, ySize);

  }


}

class Village {
  constructor() {
    this.population = 50;
    this.skills = [];
    this.gold = 0;
    this.religion = 0;
    this.science = 0;

    //DOMs
    this.div_statTree = text('stats');
    this.p_gold = text('gold');
    this.p_rel = text('religion');
    this.p_sci = text('science');
  }

  render() {
    let xSize = width - 20;
    let ySize = height - 20;

    fill(255, 255, 255, 20);
    stroke(255, 0, 0);
    rect(20, 20, xSize-20, ySize-20);
    this.showStats();
  }

  //Render helpers
  showStats() {
    fill(255);
    noStroke();
    textSize(20);
    this.div_statTree = text('stats', windowWidth/20, windowHeight/10);
    this.p_gold = text('gold: ' + this.gold, windowWidth/20, 2*windowHeight/10);
    this.p_rel = text('religion: ' + this.religion, windowWidth/20, 3*windowHeight/10);
    this.p_sci = text('science: ' + this.science, windowWidth/20, 4*windowHeight/10);
  }


}

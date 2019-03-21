import * as p5 from "p5";

export default class Shapes {
  private p5: p5;
  public isAnimationComplete: boolean = false;

  constructor(p5: p5) {
    this.p5 = p5;
  }

  render = () => {
    this.p5.ellipse(50, 50, 80, 80);
  };
}

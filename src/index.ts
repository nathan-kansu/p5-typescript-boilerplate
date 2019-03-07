import * as p5 from "p5";

const seed = (sketch: p5) => {
  sketch.setup = () => {};

  sketch.draw = () => {
    sketch.ellipse(50, 50, 80, 80);
  };
};

new p5(seed);

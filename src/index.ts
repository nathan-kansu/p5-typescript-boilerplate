import * as p5 from "p5";
import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  COLOR_BACKGROUND,
  FRAME_RATE
} from "./constants";

import "./style.css";

const sketch = (p5: p5) => {
  p5.setup = () => {
    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    p5.background(COLOR_BACKGROUND);
    p5.frameRate(FRAME_RATE);
  };

  p5.draw = () => {
    p5.ellipse(50, 50, 80, 80);
  };
};

new p5(sketch);

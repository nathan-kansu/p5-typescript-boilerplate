import * as p5 from "p5";
import {
  CANVAS_HEIGHT,
  CANVAS_ID,
  CANVAS_WIDTH,
  COLOR_BACKGROUND,
  FRAME_RATE
} from "./constants";

import "./style.css";

const sketch = (p5: p5) => {
  const capturer = new CCapture({
    format: "jpg",
    framerate: FRAME_RATE,
    quality: 100
  });
  let canvas: HTMLElement | null;
  let exportAnimation: Boolean = false;

  p5.setup = () => {
    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    p5.background(COLOR_BACKGROUND);
    p5.frameRate(FRAME_RATE);
    canvas = document.getElementById(CANVAS_ID);

    if (exportAnimation) {
      capturer.start();
    }
  };

  p5.draw = () => {
    p5.ellipse(50, 50, 80, 80);

    if (exportAnimation) {
      if (canvas) {
        capturer.capture(canvas);
      }

      p5.noLoop();
      capturer.stop();
      capturer.save();
    }
  };
};

new p5(sketch);

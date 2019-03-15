import * as p5 from "p5";
import "./style.css";

const sketch = (p5: p5) => {
  p5.setup = () => {};

  p5.draw = () => {
    p5.ellipse(50, 50, 80, 80);
  };
};

new p5(sketch);

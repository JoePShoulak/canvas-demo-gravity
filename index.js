import Ball from "./lib/Ball.js";
import { randomFrom } from "./lib/helper.js";

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("my-canvas");
const c = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const colors = ["#3288F0", "#34FA99", "#B1E33B", "#FABF34", "#F04C22"];

const ballRadius = 15;

const balls = Array(25)
  .fill()
  .map(() => {
    const x = Math.random() * (innerWidth - 2 * ballRadius) + ballRadius;
    const y = (Math.random() * innerHeight) / 2 + innerHeight / 4;

    const clr = randomFrom(colors);

    return new Ball(c, x, y, ballRadius, clr);
  });

const animate = () => {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, innerWidth, innerHeight);
  balls.forEach((ball) => ball.update());
};

animate();

import Ball from "./lib/Ball.js";
import { randomFrom } from "./lib/helper.js";

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("my-canvas");
const c = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const colors = ["#3288F0", "#34FA99", "#B1E33B", "#FABF34", "#F04C22"];

const ballRadius = 15;
const ballCount = 500;

const newBall = (event) => {
  let x, y;

  if (event) {
    x = event.x;
    y = event.y;
  } else {
    x = Math.random() * (innerWidth - 2 * ballRadius) + ballRadius;
    y = (Math.random() * innerHeight) / 2 + innerHeight / 4;
  }

  const ball = new Ball(c, x, y, ballRadius, randomFrom(colors));
  ball.dx = Math.random() - 0.5;

  return ball;
};

const balls = Array(ballCount)
  .fill()
  .map(() => newBall());

window.addEventListener("mousedown", (event) => balls.push(newBall(event)));

const animate = () => {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, innerWidth, innerHeight);
  balls.forEach((ball) => ball.update());
};

animate();

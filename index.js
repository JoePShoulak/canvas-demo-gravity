import { resizeCanvas, newBall } from "./lib/helper.js";

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("my-canvas");
const c = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ballCount = 500;

let balls;

const setup = (event) => {
  event && event.preventDefault();

  balls = Array(ballCount)
    .fill()
    .map(() => newBall(c));
};

const animate = () => {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, innerWidth, innerHeight);
  balls.forEach((ball) => ball.update());
};

window.addEventListener("mousedown", (event) => {
  if (event.button != 1) return;

  balls.push(newBall(c, event));
});

window.addEventListener("contextmenu", setup);
window.addEventListener("resize", () => resizeCanvas(canvas, balls));

setup();
animate();

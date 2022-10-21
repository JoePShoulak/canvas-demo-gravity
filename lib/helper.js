import Ball from "./Ball.js";

const random = Math.random;

const colors = ["#3288F0", "#34FA99", "#B1E33B", "#FABF34", "#F04C22"];

export const randomFrom = (array) => {
  return array[Math.floor(random() * array.length)];
};

export const resizeCanvas = (canvas, balls) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  balls
    .filter((ball) => {
      return (
        ball.x > innerWidth || ball.y > innerHeight || ball.x < 0 || ball.y < 0
      );
    })
    .map((ball) => {
      ball.x = random() * (innerWidth - 2 * Ball.maxRadius) + Ball.maxRadius;
      ball.y = (random() * innerHeight) / 2 + innerHeight / 4;

      ball.dx = 0;
      ball.dy = 0;
    });
};

export const newBall = (context, event) => {
  let x, y;
  const c = context;

  if (event) {
    x = Math.max(
      Math.min(event.x, innerWidth - Ball.maxRadius),
      Ball.maxRadius
    );
    y = Math.max(
      Math.min(event.y, innerHeight - Ball.maxRadius),
      Ball.maxRadius
    );
  } else {
    x = random() * (innerWidth - 2 * Ball.maxRadius) + Ball.maxRadius;
    y = (random() * innerHeight) / 2 + innerHeight / 4;
  }

  const radius = Math.max(Ball.maxRadius / 2, random() * Ball.maxRadius);

  const ball = new Ball(c, x, y, radius, randomFrom(colors));
  ball.dx = random() - 0.5;

  return ball;
};

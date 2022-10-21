export default class Ball {
  constructor(context, x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.dy = 1;
    this.dx = 0;
    this.radius = radius;
    this.color = color;

    /** @type {CanvasRenderingContext2D} */
    this.c = context;
  }

  update = () => {
    if (this.y + this.radius > innerHeight) {
      // If we bounce off the ground
      // this.dy *= -0.9;
      this.dy *= -1;
    } else if (this.y < this.radius) {
      // If we bounce off the ceiling
      this.dy *= -1;
    }

    // If we bounce off a wall
    if (this.x > innerWidth - this.radius || this.x < this.radius) {
      this.dx *= -1;
    }

    this.y += this.dy;
    this.x += this.dx;

    this.dy += 0.1;

    this.draw();
  };

  draw = () => {
    this.c.beginPath();
    this.c.fillStyle = this.color;
    this.c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.c.fill();
    this.c.closePath();
  };
}

export default class Ball {
  static gravity = 0.1;
  static friction = 0.96;
  static maxRadius = 30;

  constructor(context, x, y, radius, color) {
    this.x = x;
    this.y = y;

    this.dy = 0;
    this.dx = 0;

    this.radius = radius;
    this.color = color;

    this.age = Math.random() * 20;

    /** @type {CanvasRenderingContext2D} */
    this.c = context;
  }

  get touchingFloor() {
    return this.y + this.radius + this.dy > innerHeight;
  }

  get touchingCeiling() {
    return this.y - this.dy < this.radius;
  }

  get touchingWall() {
    return this.x > innerWidth - this.radius || this.x < this.radius;
  }

  update = () => {
    if (this.age > 100) return;

    if (this.touchingFloor) {
      this.dy *= -Ball.friction;
      this.age++;
    } else if (this.touchingCeiling) {
      this.dy *= -1;
    }

    // If we bounce off a wall
    if (this.touchingWall) {
      this.dx *= -1;
    }

    this.y += this.dy;
    this.x += this.dx;

    this.dy += Ball.gravity;

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

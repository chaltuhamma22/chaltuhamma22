const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    if ((this.x + this.size) >= canvas.width || (this.x - this.size) <= 0) {
      this.velX = -this.velX;
    }

    if ((this.y + this.size) >= canvas.height || (this.y - this.size) <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    for (let i = 0; i < balls.length; i++) {
      const other = balls[i];
      if (this !== other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.size + other.size) {
          const angle = Math.atan2(dy, dx);
          const speed1 = Math.sqrt(this.velX ** 2 + this.velY ** 2);
          const speed2 = Math.sqrt(other.velX ** 2 + other.velY ** 2);
          const direction1 = Math.atan2(this.velY, this.velX);
          const direction2 = Math.atan2(other.velY, other.velX);
          const velocityX_1 = speed1 * Math.cos(direction1 - angle);
          const velocityY_1 = speed1 * Math.sin(direction1 - angle);
          const velocityX_2 = speed2 * Math.cos(direction2 - angle);
          const velocityY_2 = speed2 * Math.sin(direction2 - angle);
          const final_velX_1 = velocityX_2;
          const final_velX_2 = velocityX_1;
          const final_velY_1 = velocityY_1;
          const final_velY_2 = velocityY_2;
          this.velX = Math.cos(angle) * final_velX_1 + Math.cos(angle + Math.PI / 2) * final_velY_1;
          this.velY = Math.sin(angle) * final_velX_1 + Math.sin(angle + Math.PI / 2) * final_velY_1;
          other.velX = Math.cos(angle) * final_velX_2 + Math.cos(angle + Math.PI / 2) * final_velY_2;
          other.velY = Math.sin(angle) * final_velX_2 + Math.sin(angle + Math.PI / 2) * final_velY_2;
        }
      }
    }
  }
}

const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    random(size, canvas.width - size),
    random(size, canvas.height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size
  );
  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();

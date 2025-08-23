const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set up the ball
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  vx: 2,
  vy: 2,
  radius: 25,
  color: "#007bff",
};

// Animation loop
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the ball
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
  ctx.fillStyle = ball.color;
  ctx.fill();

  // Update ball position
  ball.x += ball.vx;
  ball.y += ball.vy;

  // Bounce off walls
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.vx = -ball.vx;
  }
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.vy = -ball.vy;
  }

  // Respond to user clicks
  canvas.addEventListener("click", (event) => {
    const clickX = event.clientX;
    const clickY = event.clientY;

    // Change ball direction and speed
    ball.vx = (clickX - ball.x) / 10;
    ball.vy = (clickY - ball.y) / 10;
  });

  // Request next frame
  requestAnimationFrame(animate);
}

// Start the animation loop
animate();

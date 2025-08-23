const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

// Set fill color
ctx.fillStyle = "crimson";
// Draw a rectangle
ctx.fillRect(1, 1, 150, 100);
ctx.fillRect(200, 1, 150, 100);

// Draw a circle
ctx.beginPath();
ctx.arc(300, 300, 50, 0, 2 * Math.PI);
ctx.fillStyle = "crimson";
ctx.fill();

const textCanvas = document.getElementById("my-text-canvas");
const textCanvasCtx = textCanvas.getContext("2d");

// Set font family and size
textCanvasCtx.font = "30px Arial";

// Set text color
textCanvasCtx.fillStyle = "crimson";

// Set text baseline
textCanvasCtx.textBaseline = "middle";

// Set text shadow
textCanvasCtx.shadowColor = "rgba(0, 0, 0, 0.5)";
textCanvasCtx.shadowOffsetX = 2;
textCanvasCtx.shadowOffsetY = 2;
textCanvasCtx.shadowBlur = 4;

// Initial y position of the text
let yPos = 150;

// Initial velocity of the text
let velocity = -2;

// Bounce factor
const bounceFactor = -0.8;

// Pause duration at the top
const pauseDuration = 1000; // 1 second

// Timestamp of the last update
let lastUpdate = Date.now();

// Add some cool effects
let scale = 1;
let rotation = 0;
let opacity = 1;

function animate() {
  // Calculate the time elapsed since the last update
  const now = Date.now();
  const elapsed = now - lastUpdate;
  lastUpdate = now;

  // Slide up the text
  yPos -= 1;

  // If the text has reached the top, bounce it back down
  if (yPos < 50) {
    velocity = -velocity * bounceFactor;
    // Pause for a short duration
    setTimeout(() => {
      velocity = -velocity;
    }, pauseDuration);
  }

  // If the text has reached the bottom, reset its position
  if (yPos > 150) {
    yPos = 150;
    velocity = -2;
  }

  // Add some cool effects
  scale += 0.01;
  rotation += 0.1;
  opacity -= 0.01;

  if (scale > 1.5) scale = 1;
  if (rotation > 360) rotation = 0;
  if (opacity < 0.5) opacity = 1;

  // Clear the text canvas
  textCanvasCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);

  // Draw the text with cool effects
  textCanvasCtx.save();
  textCanvasCtx.translate(75, yPos);
  textCanvasCtx.rotate((rotation * Math.PI) / 180);
  textCanvasCtx.scale(scale, scale);
  textCanvasCtx.globalAlpha = opacity;
  textCanvasCtx.fillText("Hello HTML Canvas!", -75, 0);
  textCanvasCtx.fillText("Hello JavaScript!", -75, 50);
  textCanvasCtx.restore();

  // Request the next frame
  requestAnimationFrame(animate);
}

animate();

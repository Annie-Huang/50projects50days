// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#moving_the_pen
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#drawing_a_triangle

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 20;
let isPressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
  console.log(isPressed, x, y);
});

function drawCircle(x, y) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#moving_the_pen
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2); // Outer circle

  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#drawing_a_triangle
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.stroke();
}

// drawCircle(100, 200);
// drawLine(300, 300, 300, 500);

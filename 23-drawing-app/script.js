// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#moving_the_pen
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#drawing_a_triangle

const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEL = document.getElementById('color');
const clearEL = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10;
let isPressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
  // console.log(isPressed, x, y);
});

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
  // console.log(isPressed, x, y);
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    // console.log(x2, y2);

    // You will see problem when you move super fast and it only got circles.
    drawCircle(x2, y2);

    // Need to drawLine to connect the breakpoint when circle draws too fast.
    // Hmm, when you draw super fast, you will still see each circle sits along on the line.
    // Need to set the width of the line to be the same as the circle.
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
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
  // the line width need to be 2 times the circle radius so it doesn't appear to have all the bigger dots along the line when drawing.
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

// drawCircle(100, 200);
// drawLine(300, 300, 300, 500);

colorEL.addEventListener('change', (e) => (color = e.target.value));

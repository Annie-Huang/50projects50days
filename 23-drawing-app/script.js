// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#moving_the_pen

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 20;
let color = 'black';

function drawCircle(x, y) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#moving_the_pen
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2); // Outer circle

  ctx.fillStyle = color;
  ctx.fill();
}

drawCircle(100, 200);

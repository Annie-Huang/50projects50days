const range = document.getElementById('range');

range.addEventListener('input', (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const range_width = getComputedStyle(e.target).getPropertyValue('width');
  const label_width = getComputedStyle(label).getPropertyValue('width');

  const num_width = +range_width.slice(0, -2);
  const num_label_width = +label_width.slice(0, -2);

  const max = +e.target.max;
  const min = +e.target.min;

  // from -40 to 260
  // The scale(value, min, max, 10, -10) part is to make sure the ball is always underneath the center of the numbers when move to the edge
  const left =
    value * (num_width / max) -
    num_label_width / 2 +
    scale(value, min, max, 10, -10);

  label.style.left = `${left}px`;

  console.log(left);

  label.innerHTML = value;
});

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

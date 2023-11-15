const range = document.getElementById('range');

range.addEventListener('input', (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const range_width = getComputedStyle(e.target).getPropertyValue('width');
  const label_width = getComputedStyle(label).getPropertyValue('width');

  const num_width = +range_width.slice(0, -2);
  const num_label_width = +label_width.slice(0, -2);
  console.log(num_width, num_label_width);

  label.innerHTML = value;
});

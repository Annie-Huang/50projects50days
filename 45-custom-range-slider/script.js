const range = document.getElementById('range');

range.addEventListener('input', (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const range_width = getComputedStyle(e.target).getPropertyValue('width');
  const label_width = getComputedStyle(label).getPropertyValue('width');

  console.log(range_width, label_width);

  label.innerHTML = value;
});

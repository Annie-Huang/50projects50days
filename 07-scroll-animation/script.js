const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

// Fire this so it will the first few boxes that is < (window.innerHeight / 5) * 4
checkBoxes();

function checkBoxes() {
  // console.log(window.innerHeight);

  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// dragstart is logged as soon as you click on the .fill image and move
// dragend is logged as soon as you release the .fill image to another location
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragStart() {
  console.log('drag start');
  this.className += ' hold'; // Make sure the hold image has the initial image + the border

  // Need force invisiable to apply in the next cycle otherwise the hold above will not have the image at all.
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  console.log('drag end');
}

// Is called whenever you drag and move the image into to another .empty div. the dragOver will continue logging even when you don't move while you are on top of a .empty
function dragOver() {
  console.log('drag over');
}

function dragEnter() {
  console.log('drag enter');
}

// Is called whenever you leave the image from the current .empty div that you entered
function dragLeave() {
  console.log('drag leave');
}

function dragDrop() {
  console.log('drag drop');
}

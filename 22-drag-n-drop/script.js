const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// dragstart is logged as soon as you click ont the .fill image
// dragend is logged as soon as you release the .fill image to another location
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

function dragStart() {
  console.log('drag start');
}

function dragEnd() {
  console.log('drag end');
}

function dragOver() {
  console.log('drag over');
}

function dragEnter() {
  console.log('drag enter');
}

function dragLeave() {
  console.log('drag leave');
}

function dragDrop() {
  console.log('drag drop');
}

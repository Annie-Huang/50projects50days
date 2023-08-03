const addBtn = document.getElementById('add');

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');
}

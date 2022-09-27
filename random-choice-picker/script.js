const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
});

function createTags(input) {
  const tags = input.split(',');
  console.log(tags);
}

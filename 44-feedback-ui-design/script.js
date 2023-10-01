const ratings = document.querySelectorAll('.rating');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

panel.addEventListener('click', (e) => {
  // console.log(e.target);

  // When the <img> or <small> is clicked:
  if (e.target.parentNode.classList.contains('rating')) {
    console.log(e.target);
    removeActive();
    e.target.parentNode.classList.add('active');
  }
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}

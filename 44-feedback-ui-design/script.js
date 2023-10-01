const ratings = document.querySelectorAll('.rating');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

panel.addEventListener('click', (e) => {
  // console.log(e.target);

  // When the <img> or <small> is clicked:
  if (e.target.parentNode.classList.contains('rating')) {
    console.log(e.target);
    removeActive();
    e.target.parentNode.classList.add('active');

    if (e.target.tagName === 'IMG') {
      selectedRating = e.target.nextElementSibling.innerHTML;
    } else {
      selectedRating = e.target.innerHTML;
    }
    // console.log(selectedRating);
    // console.log(e.target.tagName);
  }
});

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
      <i class="fas fa-heart"></i>
      <strong>Thank you!</strong>
      <br />
      <strong>Feedback: ${selectedRating}</strong>
      <p>We'll use your feedback to improve our customer support</p>
  `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}

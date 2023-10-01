const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

// Use ratingsContainer instaead of panel because sendBtn is part of ratingsContainer. So click on button clicked will not trigger event on rating container.
ratingsContainer.addEventListener('click', (e) => {
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
  } else if (e.target.classList.contains('rating')) {
    // Make it worked when just clicking on the rating card as well.

    // console.log(e.target);
    removeActive();
    e.target.classList.add('active');
    selectedRating = e.target.children[1].innerHTML; // the <small> text
    // console.log(selectedRating);
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

const smallCups = document.querySelectorAll('.cup-small');
const listers = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
  // console.log(idx);

  // If the cup I click is the last one that's currently filled, then toggle it.
  // Add "idx === smallCups.length - 1" (which Brad's code does not have) so it will work for the last cup
  if (
    smallCups[idx].classList.contains('full') &&
    (idx === smallCups.length - 1 ||
      !smallCups[idx].nextElementSibling.classList.contains('full'))
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
}

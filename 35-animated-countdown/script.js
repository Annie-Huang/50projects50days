const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

function resetDOM() {
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');

  nums.forEach((num) => {
    num.classList.value = '';
  });

  nums[0].classList.add('in');
}

function runAnimation() {
  const nextToLast = nums.length - 1;

  nums.forEach((num, idx) => {
    console.log(num, idx);

    num.addEventListener('animationend', (e) => {
      // When we see goIn keyframe, swap .in to .out class
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        // When we see goOut keyframe, move on to the nextElementSibling
        num.nextElementSibling.classList.add('in');
      } else {
        // When the countdown finish
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    });
  });
}

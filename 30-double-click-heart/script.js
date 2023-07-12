const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
// loveMe.addEventListener('dblclick', (e) => {
//   console.log(123);
// });

// Smart way to create our own double click function to control the two consecutive clicks interval.
loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      console.log(123);
    } else {
      clickTime = new Date().getTime();
    }
  }
});

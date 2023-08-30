const codes = document.querySelectorAll('.code');

// On landing, focus on the first <input>
codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      // This is to make sure if we hit a backspace key and enter a number again.
      // the old number will be clear first before putting onto a new number you just typed.
      codes[idx].value = '';

      // codes[idx + 1].focus();
      // Force it to wait to finish writing, before shifting focus.
      // Otherwise it will not be possible to write into the first <input>, not starting from the second one.
      setTimeout(() => codes[idx + 1].focus(), 10);
    } else if (e.key === 'Backspace') {
      // When you enter 'backspace', focus will shift back to previous <input> and then if you enter a number again
      // old number will be clear before new number is entered.
      setTimeout(() => codes[idx - 1].focus(), 10);
    }
  });
});

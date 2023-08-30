const codes = document.querySelectorAll('.code');

// On landing, focus on the first <input>
codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      // codes[idx + 1].focus();
      // Force it to wait to finish writing, before shifting focus.
      // Otherwise it will not be possible to write into the first <input>, not starting from the second one.
      setTimeout(() => codes[idx + 1].focus(), 10);
    }
  });
});

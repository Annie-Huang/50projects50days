const codes = document.querySelectorAll('.code');

// On landing, focus on the first <input>
codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx + 1].focus();
    }
  });
});

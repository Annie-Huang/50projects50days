// https://www.w3schools.com/charsets/ref_html_ascii.asp

function getRandomLower() {
  // 97 is 'a'
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  // 65 is 'A'
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  // 48 is '0'
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

console.log(getRandomNumber());

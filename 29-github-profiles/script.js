// https://cdnjs.com/libraries/axios

// Use to test error
// const APIURL = 'https://api.github.com/usersw/';
const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');

// getUser('bradtraversy');

async function getUser(username) {
  // axios(APIURL + username)
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  try {
    const { data } = await axios(APIURL + username);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = '';
  }
});

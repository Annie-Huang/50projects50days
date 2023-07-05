// https://cdnjs.com/libraries/axios

// Use to test error
// const APIURL = 'https://api.github.com/usersw/';
const APIURL = 'https://api.github.com/users/';

getUser('bradtraversy');

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

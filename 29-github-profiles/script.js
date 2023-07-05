// https://cdnjs.com/libraries/axios

const APIURL = 'https://api.github.com/users/';

getUser('bradtraversy');

function getUser(username) {
  axios(APIURL + username)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

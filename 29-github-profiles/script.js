// https://cdnjs.com/libraries/axios

const APIURL = 'https://api.github.com/users/';

getUser('bradtraversy');

async function getUser(username) {
  // axios(APIURL + username)
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  const { data } = await axios(APIURL + username);
  console.log(data);
}

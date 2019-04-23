const request = require("request-promise-native");

const getAllUsers = async url => {
  console.log("getting user list from:", url);
  const users = await request(`${url}/users`).then(JSON.parse);
  console.log("retrieved users:", users);

  const userList = users.map(u => ({
    name: `${u.firstName} ${u.lastName}`,
    email: u.email
  }));

  console.log("userList:", userList);
  return userList;
};

module.exports = {
  getAllUsers
};

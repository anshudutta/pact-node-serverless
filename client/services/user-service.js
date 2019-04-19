const request = require('request-promise-native');

const getAllUsers = async () => {
	const SERVICE_URL = process.env.SERVICE_URL || 'http://localhost:3000';
	console.log('getting user list from:', SERVICE_URL);
	const users = await request(`${SERVICE_URL}/users`).then(JSON.parse);
	console.log('retrieved users:', users);

	const userList = users.map(u => ({
		name: `${u.firstName} ${u.lastName}`,
		email: u.email,
	}));

	console.log('userList:', userList);
	return userList;
};

module.exports = {
	getAllUsers,
};

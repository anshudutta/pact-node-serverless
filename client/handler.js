'use strict';
const { getUsers: getUsersFromService } = require('./services/user-service');

const healthCheck = async event => 'Ok- The client';
const getUsers = async event => {
	const SERVICE_URL = process.env.SERVICE_URL;
	const users = await request(`${SERVICE_URL}/users`).then(JSON.parse);

	const userList = users.map(u => ({
		name: `${u.firstName} ${u.lastName}`,
		email: u.email,
	}));

	return userList;
};

module.exports = { healthCheck, getUsers };

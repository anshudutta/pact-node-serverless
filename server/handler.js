'use strict';
const { getUsers: getUsersFromService, createUser } = require('./services/user-service');

const healthCheck = async event => 'Ok- The server';
const getUsers = async event => getUsersFromService();
const pactUserSetup = async event => {
	const state = event.data.state;
	switch (state) {
		case 'it has a list of users':
			createUser(1, 'John', 'Doe', 'john@doe.com');
			createUser(2, 'Jane', 'Doe', 'jane@doe.com');
			break;
		default:
			break;
	}
	return 'Ok';
};

module.exports = { healthCheck, getUsers, pactUserSetup };

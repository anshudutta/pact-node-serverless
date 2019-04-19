const USER_LIST = [
	{ firstName: 'John', lastName: 'Doe', email: 'john@doe.com' },
	{ firstName: 'Jane', lastName: 'Doe', email: 'jane@doe.com' },
];

module.exports = {
	getAllUsers: {
		state: 'it has a list of users',
		uponReceiving: 'a request to retrieve users',
		withRequest: {
			method: 'GET',
			path: '/users',
		},
		willRespondWith: {
			status: 200,
			body: USER_LIST,
		},
	},
};

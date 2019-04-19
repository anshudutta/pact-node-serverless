const db = new Map();

const getUsers = () => [...db.values()];

const createUser = (id, firstName, lastName, email) => {
	console.log('creating user: ', { firstName, lastName, email });
	db.set(id, { firstName, lastName, email });
};

module.exports = { getUsers, createUser };

const path = require('path');
const pact = require('pact');
const interactions = require('./interactions');

const provider = pact({
	// current service at hand, it makes it easier to know who would be broken by the change
	// in the provider when we test the contract.
	consumer: 'client',
	// required, so we know who will need to verify the pact
	provider: 'UserService',
	// where the mock service should be listening
	port: 1234,
	// path to the file where logs should be stored
	log: path.resolve(__dirname, '../logs', 'mockserver-integration.log'),
	// one of 'TRACE', 'DEBUG', 'INFO', 'ERROR', 'FATAL' OR 'WARN'
	logLevel: 'DEBUG',
	// path to the files where the pact should be saved
	dir: path.resolve(__dirname, '../pacts'),
	// the pact specification we are using
	spec: 2,
});
module.exports = provider;

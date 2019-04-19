const pact = require('@pact-foundation/pact-node');
const path = require('path');
const opts = {
	// where your service will be running during the test, either staging or localhost on CI
	providerBaseUrl: 'http://localhost:3000',
	// the url to call to set up states
	providerStatesSetupUrl: 'http://localhost:3000/pact-user-setup',
	// the pacts to test against
	pactUrls: ['http://localhost:3080/pacts/provider/UserService/consumer/client/latest'],
};

pact.verifyPacts(opts)
	.then(() => {
		console.log('success');
		process.exit(0);
	})
	.catch(error => {
		console.log('failed', error);
		process.exit(1);
	});

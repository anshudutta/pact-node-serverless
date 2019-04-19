# Consumer driven contract with PACT-NODE

![Contract Testing](documentation/Contract-Testing-with-Pact.png)

### On the consumer:

-   Write unit tests specifying the request and the response shape
-   Run the tests, which, if successful, generate a Pact file
-   Upload the Pact file to the broker

### On the producer:

-   Download the Pact files that involve the producer
-   Run the tests, which, if successful, generate verification results
-   Upload the verification results to the broker

## Install

Clone the repo

From the root folder run:

```bash
docker-compose up -d
```

OR

Build and spin up

```bash
docker-compose up -d --build
```

This will start the following

-   Provider on port 3000
-   Pact Broker on port 3080

## Usage

### Test consumer

```bash
npm run test:pact:consumer
```

### Test provider

```bash
pm run test:pact:provider
```

### Break consumer contract

-   Change the service url to <b> ~/users/all </b> instead of <b>~/users</b>
-   Run

```bash
npm run test:pact:consumer
```

The consumer tests should break indicating break in contract

### Break provider contract

-   Change the service url to <b> ~/users/all </b> instead of <b>~/users</b>
-   Update the interactions.js to reflect new behaviour
-   Publish pact files to broker

```bash
npm run test:pact:consumer
```

-   Run the server test

```bash
npm run test:pact:provider
```

The consumer tests should break indicating break in contract. The provider now needs to be updated with updated contract

# Consumer driven contract with PACT-NODE

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

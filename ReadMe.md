# Consumer driven contract with PACT-NODE

## Install

Clone the repo

From the root folder

```bash
docker-compose up -d
```

Build and spin up
``bash
docker-compose up -d --build

````
This will start the following

-   Provider on port 3000
-   Pact Broker on port 3080

## Usage

### Pact - consumer

```bash
test:pact:consumer
````

### Pact - provider

```bash
test:pact:provider
```

# SamCart challenge

An Express API. 

Project is running express with postgres database.

Testing is done through Mocha.

Linting, babel support included.

Should run this project on a Mac. Windows may present some issues.

## Installation and running with Docker

After cloning and entering directory in your terminal, follow the commands below. 

Must have docker running locally.

```
# yarn to install
yarn
# npm to install
npm install

yarn build
# or
npm run build

# may need to run a few times if it errors out. It can be finnicky.
docker-compose up

```

## Usage
Once docker container is done building and running, navigate to http://localhost:8848/api/cars
You should see a JSON representation of all the seeded cars objects in the database.

To view a specific car object, simply navigate to http://localhost:8848/api/cars/{id} - id of the car you would like to see

I did include all CRUD actions in this application if you would like to test them. There are Mocha tests written for these actions as well.

## Run locally without docker
Prerequisites: must have a running instance of postgreSQL with a database named 'cars' owned by the user postgres with password 'password'. 
This is basically a default postgres setup when installed, all that must be done is creating a 'cars' database.

Follow commands below. Make sure the docker container is not running otherwise the address will be in use.

```
# create the tables in the ps database
yarn migrate
# or
npm run migrate

# seed the tables with car data
yarn seed
# or
npm run seed

yarn start
# or
npm start

```

## Run tests
```
yarn test
# or
npm run test

```

Navigate the the urls listed above. Page should work the same way.

express back end for MUFA website

Depends on MongoDB whose location must be specified in the DB_HOST env variable with the form of `mongodb://\<host>:\<port>/\<dbname>`
By default, creating a file in the root of the project named .env will load env vars (see dotenv documentation).

MongoDB can be started with`mongod --dbpath=data --nojournal` where data is replaced with the data directory.

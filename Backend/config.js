require('dotenv').config()

const { Sequelize } = require('sequelize');

//const sicuel = new Sequelize(process.env.DATABASE_URL);

const sicuel = new Sequelize( process.env.DATABASE, process.env.USER, process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: 'postgres',
        port: process.env.PORT_DB,
        logging: true,
        dialectOptions:{
            statement_timeout: process.env.QUERY_TIMEOUT,
            ssl: {
              require: true, // This will help you. But you will see nwe error
              rejectUnauthorized: false // This line will fix new error
            }
        },
    }
) 

module.exports =  { sicuel }; 
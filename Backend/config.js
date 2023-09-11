require('dotenv').config()

const { Sequelize } = require('sequelize');

const sicuel = new Sequelize( process.env.DATABASE, process.env.USER, process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: 'postgres',
        port: process.env.PORT_DB,
        dialectOptions:{
            statement_timeout: process.env.QUERY_TIMEOUT
        }
    }
) 

module.exports =  { sicuel }; 
require('dotenv').config()
// const { Pool } = require("pg");

// const pooldb = new Pool({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
//     port: process.env.PORT_DB
// })

// module.exports = { pooldb }

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

module.exports = { sicuel }
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

const app = express()

const userRouter = require('./routers/userRouter')
const visitaRouter = require('./routers/visitaRouter')
const authRouter = require('./routers/authRouter')

const isLogged = require('./middlewares/userLogged')

const { sicuel }  = require("./config")

const host = 'localhost'
const path = require('path')

/* Globals */
app.set('port', process.env.PORT || 3000)

app.get('/', (request, response) => {
    console.log('renderizando vista')
    //response.render('index')
})

// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')

/* mid */

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
//app.use(isLogged)

app.use('/users', userRouter)
app.use('/visitas', visitaRouter)
app.use('/authRouter', authRouter)

app.listen(app.get('port'), ()=>{
    sicuel.sync(); //{force: false}
    console.log(`servidor arriba en ${host} y puerto ` + app.get('port')) 
})

module.exports = app
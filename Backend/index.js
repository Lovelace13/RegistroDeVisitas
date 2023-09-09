const http = require('http')
const port = 3030
const host = 'localhost'

const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.end('hola!')
})


server.listen(port, host, () =>{
   console.log(`servidor arriba en ${host} y puerto ${port}`) 
})
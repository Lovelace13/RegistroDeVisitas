const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.verifyToken = (req, res, next) => {
    const authorization = req.headers.authorization
    console.log(authorization)
    if (!authorization) { return res.status(401).json({ error: "Token no enviado" })}
    try {
        const token = authorization.split(" ")[1]
        req.user = jwt.verify(token, process.env.SECRET_KEY)
        next()
    } catch (error) {
        return res.status(401).json({ error: error.message })
    }
    
}
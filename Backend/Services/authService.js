const UserAuth = require('../models/authModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

class AuthService {

    constructor(){}

    async register(data){
        try{
            data.contraseña = bcrypt.hashSync(data.contraseña, 10)
            const userAuth = new UserAuth(data)
            return await userAuth.save()
        }
        catch(error){
            throw new Error('error en AuthService.register ' + error.message)
        }
        
    }

    async filterByEmail(correo){
        try{
            const userAuth = await UserAuth.findOne({  
                where: { email: correo } 
            })
            return userAuth
        }
        catch(error){
            throw new Error('error en AuthService.filterByEmail ' + error.message)
        }
        
    }

    generateToken(payload){
        const token = jwt.sign(payload, process.env.SECRET_KEY)
        return token
    }
}

module.exports = AuthService
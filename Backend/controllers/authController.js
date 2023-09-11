
const AuthService = require('../Services/authService')
const bcrypt = require('bcrypt')
const servicioSesion = new AuthService();

exports.nuevoRegistro = async (req, res) => {
    try{
        await servicioSesion.register(req.body)
        return res.status(201).json({'message': "Usuario registrado"})
    }catch(error){
        return res.status(500).json({"error": error.message})
    }
}

exports.getEmail = async (req, res) => {

}

exports.nuevaSesion = async (req, res) => {
    try {
        let data = req.body
        user = await servicioSesion.filterByEmail(data.email)
        if(!user){
            return res.status(401).json({"msg":"Usuario no encontrado. Verifique email"})
        }
        const flag = bcrypt.compareSync(data.contraseña, user.contraseña)
        if (!flag){
            return res.status(400).json({"msg":"contraseña incorrecta"})
        }
        const payload = {
            email: user.email
        }
        const token = servicioSesion.generateToken(payload)
        return res.status(200).send(token)
    } catch (error) {
        return res.status(500).json({"errorSesion": error.message})
    }
}

const UserService = require('../Services/userService')
const servicioUsuario = new UserService();

exports.getAllUsers = async (req, res) => {
    const listUsuarios =  await servicioUsuario.getAll()
    if (!listUsuarios){
        return res.status(204).json(listUsuarios)
    }    
    return res.status(200).json(listUsuarios)
}

exports.getAllSupervisores = async (req, res) => {
    const listSupervisores =  await servicioUsuario.getAllSupervisores()
    if (!listSupervisores){
        return res.status(204).json(listSupervisores)
    }    
    return res.status(200).json(listSupervisores)

}

exports.getUser = async (req, res) => {
    const id = req.params.id
    if (isNaN(id)){
        return res.status(406).json({'message': "Criterio de busqueda no aceptado"})
    }
    const user = await servicioUsuario.filterById(id)
    if (!user) {
        return res.status(400).json({'message': "Usuario no encontrado"})
    }
    return res.status(200).json(user)
}

exports.createUser = async (req, res) => {

    try {
        let data = req.body
        await servicioUsuario.create(data)
        return res.status(201).send("Usuario registrado")
    } catch (error) {
        return res.status(500).json({"error": error.message})
    }
    
}

exports.updateUser = async (req, res) => {
    try {
        let data = req.body
        const id = req.params.id
        if (isNaN(id)){
            return res.status(406).json({'message': "Criterio para actualizacion no aceptado"})
        }
        await servicioUsuario.update(id, data)
        return res.status(201).send("Usuario actualizado")
    } catch (error) {
        return res.status(500).json({"error": error.message})
    }
}

exports.deleteUser = async (req, res) => {
    try{
        const id = req.params.id
        const user = await servicioUsuario.filterById(id)
        if (!user) {
            return res.status(400).json({'message': "Usuario no encontrado"})
        }
        await servicioUsuario.delete(id)
        res.status(200).send('Usuario eliminado')
    }
    catch(error){
        return res.status(500).json({"error": error.message})
    }
}


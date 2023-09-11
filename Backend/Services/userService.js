const  Usuario  = require('../models/userModel.js')

class UserService{
    constructor(){}

    async getAll(){
        let users = null;
        try{
            users = await Usuario.findAll({
                //atributes: ["nombre", "lastname", "rol", "email"],
            }) 
            console.log('despues')
            return users;
        }
        catch(error){
            console.log(error)
        }

        return users
    }

    async getAllSupervisores(){
        let users = null;
        try{
            users = await Usuario.findAll({
                where: {
                    rol: 'S'
                }
            }) 
            return users;
        }
        catch(error){
            console.log(error)
        }
        return users
    }


    async filterById(id){
        try{
            const user = await Usuario.findOne({ 
                where: { iduser: id } 
            })
            return user
        }
        catch(error){
            throw new Error('error en filterById ' + error.message);
        }
        
    }

    async create(data){
        try{
            const user = new Usuario(data); //User(data)
            return await user.save();
        }
        catch(error){
            throw new Error('error en create ' + error.message)
        }
        
    }

    async update(id, data){
        try{
            await Usuario.update(
                {
                    rol: data.rol,
                    email: data.email
                },               
                { 
                where: { iduser: id } 
                }
            )
        }catch(error){
            throw new Error('error en update ' + error.message)
        }

    }

    async delete(id){
        try{
            await Usuario.destroy({
                where: {
                  iduser: id,
                },
              });
            return {msg: 'ok'}
        }
        catch(error){
            throw new Error('error en delete ' + error.message)
        }
        // return await User.deleteOne({_id:id})
    }
}

module.exports =  UserService;
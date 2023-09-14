const Visita  = require('../models/visitantesModel')
const Department = require('../models/departmentModel')

class VisitaService{
    constructor(){}

    async getAll(){
        let visitas = null;
        try{
            visitas = await Visita.findAll({ }) 
            return visitas;
        }
        catch(error){
            throw new Error('error en VisitaService.getAll ' + error.message);
        }
    }

    async filterById(id){
        console.log('entre a filterById')
        try{
            const visita = await Visita.findOne({ 
                where: { idvisita: id } 
            })
            return visita
        }
        catch(error){
            throw new Error('error en VisitaService.filterById ' + error.message);
        }
        
    }

    async create(data){
        try{
            const visita = new Visita(data);
            return await visita.save();
        }
        catch(error){
            throw new Error('error en VisitaService.create ' + error.message)
        }
        
    }
    // no se va a usar ni el update ni el delete
    async delete(id){
        try{
            await Visita.destroy({
                where: {
                  idvisita: id,
                },
              });
            return {msg: 'ok'}
        }
        catch(error){
            throw new Error('error en VisitaService.delete ' + error.message)
        }
    }

    async listaDepartamentos(){
        let departamentos = null;
        try{
            departamentos = await Department.findAll({ }) 
            return departamentos;
        }
        catch(error){
            throw new Error('error en VisitaService.listaDepartamentos ' + error.message);
        }
    }

    async departamentoVisita(codigo){
        try{
            const departamento = await Department.findOne({ 
                where: { coddepartamento: codigo } 
            })
            return departamento
        }
        catch(error){
            throw new Error('error en VisitaService.departamentoVisita ' + error.message);
        }
        
    }
}

module.exports =  VisitaService;

const VisitorsService = require('../Services/visitaService')
const servicioVisitas = new VisitorsService();

exports.getAllDepartamentos = async (req, res) => {
    const visitas =  await servicioVisitas.listaDepartamentos()
    if (!visitas){
        return res.status(204).json(visitas)
    }    
    return res.status(200).json(visitas)
}

exports.getDepartamento = async (req, res) => {
    const cod = req.params.id
    const departamento = await servicioVisitas.departamentoVisita(cod)
    if (!departamento) {
        return res.status(400).json({'message': "Departamento no encontrado"})
    }
    res.status(200).json(departamento)
}


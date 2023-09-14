
const VisitorsService = require('../Services/visitaService')
const servicioVisitas = new VisitorsService();

exports.getAllDepartamentos = async (req, res) => {
    console.log('entre a getAllDepartamentos ')
    const departamentos =  await servicioVisitas.listaDepartamentos()
    if (!departamentos){
        return res.status(204).json(departamentos)
    }    
    return res.status(200).json(departamentos)
}

exports.getDepartamento = async (req, res) => {
    const cod = req.params.id
    const departamento = await servicioVisitas.departamentoVisita(cod)
    if (!departamento) {
        return res.status(400).json({'message': "Departamento no encontrado"})
    }
    res.status(200).json(departamento)
}


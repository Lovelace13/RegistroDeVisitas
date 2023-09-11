
const VisitorsService = require('../Services/visitaService')
const servicioVisitas = new VisitorsService();

exports.getAllVisitas = async (req, res) => {
    const visitas =  await servicioVisitas.getAll()
    if (!visitas){
        return res.status(204).json(visitas)
    }    
    return res.status(200).json(visitas)
}

exports.getVisita = async (req, res) => {
    const id = req.params.id
    const registro = await servicioVisitas.filterById(id)
    if (!registro) {
        return res.status(400).json({'message': "Registro no encontrado"})
    }
    res.status(200).json(registro)
}

exports.createVisita = async (req, res) => {
    try {
        let data = req.body
        await servicioVisitas.create(data)
        return res.status(201).send("Visita registrado")
    } catch (error) {
        return res.status(500).json({"error": error.message})
    }
}

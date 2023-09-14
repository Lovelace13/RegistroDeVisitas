const express = require('express')
const router = express.Router()
const visitaController = require('../controllers/visitasController')
const deptController = require('../controllers/deptController')


/* rutas del modelo visita */
router.get('/', visitaController.getAllVisitas)
router.get('/:id([0-9]{1,2})', visitaController.getVisita)
router.post('/', visitaController.createVisita)

/* rutas para los departamentos que se visitan */
router.get('/departamentos', deptController.getAllDepartamentos)
router.get('/departamento/:id', deptController.getDepartamento)

module.exports = router
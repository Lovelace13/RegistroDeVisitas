const express = require('express')
const router = express.Router()
const visitaController = require('../controllers/visitasController')
const deptController = require('../controllers/deptController')


router.get('/', visitaController.getAllVisitas)
router.get('/:id', visitaController.getVisita)
router.post('/', visitaController.createVisita)

/* rutas para los departamentos que se visitan */
router.get('/departamentos', deptController.getAllDepartamentos)
router.get('/departamento/:id', deptController.getDepartamento)

module.exports = router
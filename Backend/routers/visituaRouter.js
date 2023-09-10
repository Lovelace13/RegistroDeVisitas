const express = require('express')
const router = express.Router()
const visitaController = require('../controllers/visitasController')


router.get('/', visitaController.getAllVisitas)
router.get('/:id', visitaController.getVisita)
router.post('/', visitaController.createVisita)
router.put('/:id', visitaController.updateVisita)
router.delete('/:id', visitaController.deleteVisita)

module.exports = router
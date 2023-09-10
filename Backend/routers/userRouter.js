const express = require('express')
const isUserLogged = require('../middlewares/userLogged')
const router = express.Router()
const userController = require('../controllers/userController')

//[middleware1, middleware2, ..]
// router.get('/', [isUserLogged], userController.getAllUsers)
router.get('/', userController.getAllUsers)
router.get('/supervisores', userController.getAllSupervisores)
router.get('/:id', userController.getUser)

router.post('/', userController.createUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)

module.exports = router
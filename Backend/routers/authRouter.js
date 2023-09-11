const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const { verifyToken } = require('../middlewares/verifyToken')

//authRouter
router.post('/register', authController.nuevoRegistro)
router.post('/login', authController.nuevaSesion)

router.get('/dashboard', verifyToken, (req, res)=>{
    res.status(200).send('Dashboard. Usuario: ' + req.user.email)
})

module.exports = router
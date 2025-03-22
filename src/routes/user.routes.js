const express = require('express')
const userController = require('../controllers/user.controller')
const { verifyToken, isAdmin } = require('../middlewares/auth.middlewares')


const router = express()

router.put('/profile', verifyToken, userController.updateUserProfile);
router.get('/', verifyToken, isAdmin, userController.getUsers)
router.patch('make-admin/:id', verifyToken, isAdmin, userController.changeToAdmin)

module.exports = router
const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menu.controller');
const { verifyToken, isAdmin } = require('../middlewares/auth.middlewares')


router.get('/', menuController.getAllMenus);
router.post('/', verifyToken, isAdmin, menuController.createMenu);
router.put('/:id', verifyToken, isAdmin, menuController.updateMenu);
router.delete('/:id', verifyToken, isAdmin, menuController.deleteMenu);

module.exports = router;

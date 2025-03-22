const {
    createMenuService,
    getAllMenusService,
    updateMenuService,
    deleteMenuService,
  } = require('../services/menu.service');
  
  const createMenu = async (req, res) => {
    try {
      const menu = await createMenuService(req.body);
      res.status(201).json(menu);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  const getAllMenus = async (req, res) => {
    try {
      const menus = await getAllMenusService();
      res.status(200).json(menus);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  const updateMenu = async (req, res) => {
    try {
      const updated = await updateMenuService(req.params.id, req.body);
      res.status(200).json(updated);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  const deleteMenu = async (req, res) => {
    try {
      await deleteMenuService(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  module.exports = {
    createMenu,
    getAllMenus,
    updateMenu,
    deleteMenu,
  };
  
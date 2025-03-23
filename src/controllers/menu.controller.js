const {
  createMenuService,
  getAllMenusService,
  updateMenuService,
  deleteMenuService,
} = require("../services/menu.service");

const createMenu = async (req, res, next) => {
  try {
    console.log(req.user);

    const menuData = {
      ...req.body,
      createdBy: req.user.id,
    };
    const menu = await createMenuService(menuData);
    res.status(201).json(menu);
  } catch (error) {
    error.message = "Failed to create menu: " + error.message
    next(error)
  }
};

const getAllMenus = async (req, res, next) => {
  try {
    const menus = await getAllMenusService();
    res.status(200).json(menus);
  } catch (error) {
    error.message = "Failed to get all menu: " + error.message
    next(error)
  }
};

const updateMenu = async (req, res, next) => {
  try {
    const updated = await updateMenuService(
      req.params.id,
      req.body,
      req.user.id
    );
    res.status(200).json(updated);
  } catch (error) {
    error.message = "Failed to update menu: " + error.message
    next(error)
  }
};

const deleteMenu = async (req, res, next) => {
  try {
    await deleteMenuService(req.params.id);
    res.status(204).json({ message: "menu delteded successfully" });
  } catch (error) {
    error.message = "Failed to delete menu: " + error.message
    next(error)
  }
};

module.exports = {
  createMenu,
  getAllMenus,
  updateMenu,
  deleteMenu,
};

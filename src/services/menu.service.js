const {
  createMenu,
  getAllMenus,
  updateMenuById,
  deleteMenuById,
  getMenu,
} = require("../repositories/menu.repositories");

const createMenuService = async (data) => {
  return await createMenu(data);
};

const getAllMenusService = async () => {
  return await getAllMenus();
};

const updateMenuService = async (menuId, data, userId) => {
  const menu = await getMenu(menuId);

  if (!menu) {
    const error = new Error("Menu not found");
    error.statusCode = 404;
    throw error;
  }

  if (menu.createdBy.toString() !== userId) {
    const error = new Error("You are not authorized to update this menu");
    error.statusCode = 403;
    throw error;
  }

  return await updateMenuById(menuId, data);
};

const deleteMenuService = async (id) => {
  return await deleteMenuById(id);
};

module.exports = {
  createMenuService,
  getAllMenusService,
  updateMenuService,
  deleteMenuService,
};

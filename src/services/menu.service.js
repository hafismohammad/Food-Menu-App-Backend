const {createMenu, getAllMenus, updateMenuById, deleteMenuById}  = require('../repositories/menu.repositories');

const createMenuService = async (data) => {
  return await createMenu(data);
};

const getAllMenusService = async () => {
  return await getAllMenus();
};

const updateMenuService = async (id, data) => {
  return await updateMenuById(id, data);
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

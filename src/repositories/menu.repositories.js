const Menu = require('../model/menu.model');

const createMenu = async (menuData) => {
  return await Menu.create(menuData);
};

const getAllMenus = async () => {
  return await Menu.find({});
};

const updateMenuById = async (id, data) => {
  return await Menu.findByIdAndUpdate(id, data, { new: true });
};

const deleteMenuById = async (id) => {
  return await Menu.findByIdAndDelete(id);
};

module.exports = {
  createMenu,
  getAllMenus,
  updateMenuById,
  deleteMenuById,
};

const User = require("../model/user.model");

const findUserById = async (id) => {
  return await User.findById(id);
};

const updateUser = async (id, updateData) => {
  return await User.findByIdAndUpdate(id, updateData, { new: true });
};

const getAllUsers = async () => {
  return await User.find({});
};

const changeUserRole = async (id, newRole) => {
  return await User.findByIdAndUpdate(id, { role: newRole }, { new: true });
};

module.exports = { findUserById, updateUser, getAllUsers, changeUserRole };

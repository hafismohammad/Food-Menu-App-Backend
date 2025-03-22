const {
  findUserById,
  updateUser,
  changeUserRole,
} = require("../repositories/user.repositories");

const updateUserProfileService = async (userId, updateData) => {
  const user = await findUserById(userId);
  if (!user) throw new Error("User not found");

  const updatedUser = await updateUser(userId, updateData);
  return updatedUser;
};

const getAllUsersService = async () => {
  return await getAllUsers();
};

const changeToAdminService = async (userId) => {
  const user = await findUserById(userId);
  if (!user) throw new Error("User not found");

  if (user.role === "admin") throw new Error("User is already an admin");

  const updatedUser = await changeUserRole(userId, "admin");
  return updatedUser;
};

module.exports = {
  updateUserProfileService,
  getAllUsersService,
  changeToAdminService,
};

const {
  findUserById,
  updateUser,
  changeUserRole,
  getAllUsers,
} = require("../repositories/user.repositories");

const updateUserProfileService = async (userId, updateData) => {
  
  const user = await findUserById(userId);
  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404; 
    throw error;
  }

  const updatedUser = await updateUser(userId, updateData);
  return updatedUser;
};

const getAllUsersService = async () => {
  return await getAllUsers();
};

const changeToAdminService = async (userId) => {
  const user = await findUserById(userId);
  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404; 
    throw error;
  }
  
  if (user.role === "admin") {
    const error = new Error("User is already an admin");
    error.statusCode = 400; 
    throw error;
  }
  
  const updatedUser = await changeUserRole(userId, "admin");
  return updatedUser;
};

module.exports = {
  updateUserProfileService,
  getAllUsersService,
  changeToAdminService,
};

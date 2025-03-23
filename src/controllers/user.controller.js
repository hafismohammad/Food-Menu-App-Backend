const {
  updateUserProfileService,
  getAllUsersService,
  changeToAdminService,
} = require("../services/user.service");

const updateUserProfile = async (req, res, next) => {
  try {
    const updated = await updateUserProfileService(req.user.id, req.body);
    res.status(200).json({ message: "Profile updated", user: updated });
  } catch (error) {
    error.message = "Failed to update profile: " + error.message
    next(error)
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersService();
    res.status(200).json(users);
  } catch (error) {
    error.message = "Failed to get all users" + error.message
    next(error)
  }
};

const changeToAdmin = async (req, res, next) => {
  try {
    const updated = await changeToAdminService(req.params.id);
    res.status(200).json({ message: "User promoted to admin", user: updated });
  } catch (error) {
    next(error)
  }
};

module.exports = { getUsers, changeToAdmin, updateUserProfile };

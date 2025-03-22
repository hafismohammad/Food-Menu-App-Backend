const { updateUserProfileService, getAllUsersService, changeToAdminService } = require("../services/user.service");


const updateUserProfile = async (req, res) => {
  try {
    const updated = await updateUserProfileService(req.user.id, req.body);
    res.status(200).json({ message: "Profile updated", user: updated });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
    try {
      const users = await getAllUsersService();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  const changeToAdmin = async (req, res) => {
    try {
      const updated = await changeToAdminService(req.params.id);
      res.status(200).json({ message: 'User promoted to admin', user: updated });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

module.exports = { getUsers, changeToAdmin, updateUserProfile };

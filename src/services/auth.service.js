const {
  findUserByEmail,
  createUser,
} = require("../repositories/auth.repositories");
const bcrypt = require("bcryptjs");

const signupService = async (name, email, password) => {
  const existing = await findUserByEmail(email);
  if (existing) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  return await createUser({
    name,
    email,
    password: hashedPassword,
    role: "user",
  });
};

const loginService = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new Error("Invalid email or password");
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }
  const token = generateToken(user._id, user.role);

  return {
    message: "Login successful",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token,
  };
};

module.exports = { signupService, loginService };

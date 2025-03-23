const {
  findUserByEmail,
  createUser,
} = require("../repositories/auth.repositories");
const bcrypt = require("bcryptjs");
const generateToken = require("../config/generateToken");

const signupService = async (name, email, password) => {
  try {
    const existing = await findUserByEmail(email);
    if (existing) {
      const error = new Error("User already exists");
      error.statusCode = 409;
      throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    return await createUser({
      name,
      email,
      password: hashedPassword,
      role: "user",
    });
  } catch (error) {
    console.error("SignupService Error:", error.message);
    throw new Error(error.message || "Signup failed");
  }
};

const loginService = async (email, password) => {
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      const error = new Error("Invalid email or password");
      error.statusCode = 401;
      throw error;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = new Error("Invalid email or password");
      error.statusCode = 401;
      throw error;
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
  } catch (error) {
    console.error("LoginService Error:", error.message);
    throw new Error(error.message || "Login failed");
  }
};

module.exports = { signupService, loginService };

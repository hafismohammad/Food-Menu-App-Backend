const { signupService, loginService } = require("../services/auth.service");

const signup = async (req, res, next) => {
  try {
    console.log('hit');
    
    const { name, email, password } = req.body;

    const result = await signupService(name, email, password);
    res.status(201).json(result);
  } catch (error) {
    console.error("Signup error:", error.message);
    error.message = "Signup failed: " + error.message;
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await loginService(email, password);
    res.status(200).json(result);
  } catch (error) {
    error.message = "Login failed: " + error.message;
    next(error)
  }
};


module.exports = { signup, login };

const { signupService, loginService } = require('../services/auth.service')

const signup = async (req, res) => {
    try {
        console.log('hit controller');
        const { name, email, password } = req.body;
        console.log('name, email, password ', name, email, password);
        
        const result = await signupService(name, email, password);
        res.status(201).json(result);
    } catch (error) {
        console.error('Signup error:', error.message);
        res.status(500).json({ message: 'Signup failed' });
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
      const result = await loginService( email, password);
      res.status(200).json(result);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };


module.exports = { signup, login }
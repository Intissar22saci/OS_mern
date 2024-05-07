// authController.js
const bcrypt = require('bcrypt');
const UserModel = require('../models/users');

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;

    try {
      // Validate email and password
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }

      // Perform authentication
      const user = await UserModel.findOne({ email });

      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Save user in session
      req.session.user = user.toObject();

      res.json({ message: 'Login successful', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async profil(req, res) {
    try {

      const user = req.session.user;
   
    console.log(user);
    console.log(user.uuid);
    const userpro=user.uuid;
    console.log(userpro);
      console.log(user);
      if (!user) {
        return res.status(401).json({ message: 'No session data found' });
      }

      res.json(user.email);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

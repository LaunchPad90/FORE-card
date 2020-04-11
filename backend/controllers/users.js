const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup
};

async function signup(req, res) {
  try {
      const user = await User.create(req.body);
      res.json(user);
  } catch(err) {
      res.status(400).json(err);
  }
}

  /*----- Helper Functions -----*/

function createJWT(user) {
    return jwt.sign(
      {user}, // data payload
      SECRET,
      {expiresIn: '24h'}
    );
  }
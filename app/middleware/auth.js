const dotenv = require("dotenv");

dotenv.config();

const auth = (req, res, next) => {
  const { username, password } = req.body;

  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    req.isAdmin = true;
  } else {
    req.isAdmin = false;
  }
  next();
};

module.exports = auth;
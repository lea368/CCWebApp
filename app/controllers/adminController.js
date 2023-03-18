const Admin = require('../models/admin');

exports.getLogin = (req, res) => {
  res.render('login');
};

exports.postLogin = async (req, res) => {
  if (req.isAdmin) {
    const admin = await Admin.getAdmin(req.body.username);
    req.session.admin = admin;
    res.redirect('/dashboard');
  } else {
    res.redirect('/login');
  }
};

exports.getDashboard = (req, res) => {
  if (req.session.admin) {
    res.render('dashboard');
  } else {
    res.redirect('/login');
  }
};
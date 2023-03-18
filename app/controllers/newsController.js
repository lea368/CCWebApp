const News = require('../models/news');

exports.getNews = async (req, res) => {
    try {
      const news = await News.getAll();
      const admin = req.user && req.user.isAdmin; // Añade esta línea para determinar si el usuario es un administrador.
      res.render('news', { news, admin });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener las noticias');
    }
  };

exports.postNews = async (req, res) => {
  if (req.session.admin) {
    const { title, content } = req.body;
    await News.create(title, content);
  }
  res.redirect('/news');
};
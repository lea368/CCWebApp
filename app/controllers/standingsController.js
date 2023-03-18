const Standings = require('../models/standings');
const Match = require('../models/match');

exports.getStandings = async (req, res) => {
  const standings = await Standings.getAll();
  res.render('standings', { standings });
};

exports.postResult = async (req, res) => {
  if (req.session.admin) {
    const { team1, team2, score1, score2 } = req.body;
    await Match.create(team1, team2, score1, score2);
    await Standings.update(team1, team2, score1, score2);
  }
  res.redirect('/standings');
};
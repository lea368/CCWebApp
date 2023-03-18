const sql = require("mssql");
const config = require("../config/database");

exports.create = async (team1, team2, score1, score2) => {
  await sql.connect(config);

  const request = new sql.Request();
  request.input("team1", sql.VarChar, team1);
  request.input("team2", sql.VarChar, team2);
  request.input("score1", sql.Int, score1);
  request.input("score2", sql.Int, score2);

  await request.query(
    "INSERT INTO Matches (team1, team2, score1, score2) VALUES (@team1, @team2, @score1, @score2)"
  );
};
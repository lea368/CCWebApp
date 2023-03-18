const sql = require("mssql");
const config = require("../config/database");

exports.getAll = async () => {
  await sql.connect(config);

  const request = new sql.Request();
  const result = await request.query("SELECT * FROM Standings ORDER BY points DESC");
  return result.recordset;
};

exports.update = async (team1, team2, score1, score2) => {
  await sql.connect(config);

  // Implementa la lógica de actualización de la tabla de posiciones según los resultados de los partidos
};
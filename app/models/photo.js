const sql = require("mssql");
const config = require("../config/database");

exports.getAll = async () => {
  await sql.connect(config);

  const request = new sql.Request();
  const result = await request.query("SELECT * FROM Photos");
  return result.recordset;
};

exports.create = async (name, url) => {
  await sql.connect(config);

  const request = new sql.Request();
  request.input("name", sql.VarChar, name);
  request.input("url", sql.VarChar, url);

  await request.query("INSERT INTO Photos (name, url) VALUES (@name, @url)");
};
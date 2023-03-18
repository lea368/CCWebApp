const sql = require("mssql");
const config = require("../config/database");

exports.getAll = async () => {
  await sql.connect(config);

  const request = new sql.Request();
  const result = await request.query("SELECT * FROM News ORDER BY created_at DESC");
  return result.recordset;
};

exports.create = async (title, content) => {
  await sql.connect(config);

  const request = new sql.Request();
  request.input("title", sql.VarChar, title);
  request.input("content", sql.VarChar, content);

  await request.query("INSERT INTO News (title, content) VALUES (@title, @content)");
};
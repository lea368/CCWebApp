const sql = require("mssql");
const config = require("../config/database");

exports.getAdmin = async (username) => {
  await sql.connect(config);

  const request = new sql.Request();
  request.input("username", sql.VarChar, username);

  const result = await request.query("SELECT * FROM Admins WHERE username = @username");
  return result.recordset[0];
};
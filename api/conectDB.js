import mysql from "mysql2/promise";

export const DB = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "sys",
});

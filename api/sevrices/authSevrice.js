import { json } from "express";
import { DB } from "../conectDB.js";
import bcrypt from "bcryptjs";

const hashUserPassword = (userPassword) => {
  let salt = bcrypt.genSaltSync(10);
  let hashPassword = bcrypt.hashSync(userPassword, salt);
  return hashPassword;
};

export const createUserServices = async (userName, email, password, name) => {
  let hash = await hashUserPassword(password);
  DB.query(
    "insert into users (userName,email,password,name)values (?,?,?,?)",
    [userName, email, hash, name],
    function (err, results, fields) {
      if (err) {
        console.log("loi", err);
      }
    }
  );
};

// const checkEmail = (userName) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const [rows] = await DB.query("SELECT * FROM users WHERE userName = ?", [
//         userName,
//       ]);
//       if (rows.length > 0) {
//         resolve(true);
//       } else {
//         resolve(false);
//       }
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

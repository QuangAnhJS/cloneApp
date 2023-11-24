import Jwt from "jsonwebtoken";
import { DB } from "../conectDB.js";
import moment from "moment";
export const getPost = async (req, res) => {
  try {
    const token = req.cookies.accessToken;
    if (!token) {
      return res.status(403).json("chưa dang nhập");
    }
    const userId = await Jwt.verify(token, "UserID");
    const [rows] = await DB.execute(
      `SELECT p.*, u.id ,u.name ,u.img  FROM posts AS p JOIN users AS u ON(u.id=p.userId) 
       LEFT JOIN relationships AS r ON(p.userId=r.flowerUserId OR r.flowerUserId=?) ORDER BY P.createAt DESC`,
      [userId]
    );
    console.log(rows);
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({ error: "Error in the request" });
  }
};
export const addPost = async (req, res) => {
  try {
    const token = req.cookies.accessToken;
    if (!token) {
      return res.status(403).json("chưa dang nhập");
    }
    const userId = await Jwt.verify(token, "UserID");
    if (!req.body.desc && !req.body.Image) {
      return res.status(401).json("bạn chưa viết gì cả");
    } else {
      const values = [
        req.body.desc || null,
        req.body.Image || null,
        userId.id,
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      ];
      const [rows] = await DB.execute(
        "INSERT INTO posts (`desc`,`Image`,`userId`,`createAt`) VALUES (?, ?, ?, ?)",
        [...values]
      );
      console.log(values);
      console.log(rows);
      return res.status(200).json("thành công");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error in the request" });
  }
};

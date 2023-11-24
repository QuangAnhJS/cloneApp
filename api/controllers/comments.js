import { DB } from "../conectDB.js";
import Jwt from "jsonwebtoken";
export const getComment = async (req, res) => {
  try {
    const token = req.cookies.accessToken;
    if (!token) {
      return res.status(403).json("chưa dang nhập");
    }
    const userId = await Jwt.verify(token, "UserID");
    const [rows] = await DB.execute(
      `SELECT c.*, u.id ,u.name ,u.img  FROM comments AS c JOIN users AS u ON(u.id=c.userId) 
         WHERE c.postId=? ORDER BY c.createAt DESC`,
      [userId]
    );
    console.log(rows);
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({ error: "Error in the request" });
  }
};

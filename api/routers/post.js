import express from "express";
import { getPost, addPost } from "../controllers/posts.js";
// import { getUser, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get("/post", (req, res) => {
  return res.send("post");
});
// router.put("/", updateUser);

router.get("/", getPost);

router.post("/", addPost);
export default router;

import express from "express";
// import { getUser, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get("/post", (req, res) => {
  return res.send("post");
});
// router.put("/", updateUser);

export default router;

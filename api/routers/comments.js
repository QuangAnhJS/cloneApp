import express from "express";
// import { getUser, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get("/comments", (req, res) => {
  return res.send("comments");
});
// router.put("/", updateUser);

export default router;

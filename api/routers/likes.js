import express from "express";
// import { getUser, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get("/likes", (req, res) => {
  return res.send("likes");
});
// router.put("/", updateUser);

export default router;

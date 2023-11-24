import express from "express";
import { getComment } from "../controllers/comments.js";

const router = express.Router();

router.get("/", getComment);
// router.put("/", updateUser);

export default router;

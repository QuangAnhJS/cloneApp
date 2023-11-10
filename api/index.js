import express from "express";
import bodyParser from "body-parser";

import userRoutes from "./routers/users.js";
import authRoutes from "./routers/auth.js";
import commentRoutes from "./routers/comments.js";
import postRoutes from "./routers/post.js";
import likeRoutes from "./routers/likes.js";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());
const port = process.env.PORT;

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
// app.use("/api/relationships", relationshipRoutes);
app.listen(port, () => {
  console.log("sever running!", port);
});

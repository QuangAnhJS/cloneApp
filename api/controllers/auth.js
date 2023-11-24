import { DB } from "../conectDB.js";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

// export const register = (req, res) => {
//   //CHECK USER IF EXISTS

//   const q = "SELECT * FROM users WHERE userName = ?";

//   DB.query(q, [req.body.userName], (err, data) => {
//     if (err) return res.status(500).json(err);
//     if (data.length) return res.status(409).json("User already exists!");
//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(req.body.password, salt);

//     const q =
//       "INSERT INTO users (`userName`,`email`,`password`,`name`) VALUE (?)";

//     const values = [
//       req.body.userName,
//       req.body.email,
//       hashedPassword,
//       req.body.name,
//     ];

//     DB.query(q, [values], (err, data) => {
//       if (err) return res.status(500).json(err);
//       return res.status(200).json("User has been created.");
//     });
//   });
// };
const salt = bcrypt.genSaltSync(10);
export const register = async (req, res) => {
  try {
    const selectQuery = "SELECT * FROM users WHERE email = ?";
    const [rows] = await DB.execute(selectQuery, [req.body.email]);

    if (rows.length > 0) {
      res.status(409).json("email dã tồn tại vui lòng chọn email khác !");
      return;
    }
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const values = [
      req.body.userName,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];
    if (
      !req.body.userName ||
      !req.body.email ||
      !hashedPassword ||
      !req.body.name
    ) {
      res.status(209).json("Vui lòng nhập đầy đủ thông tin");
    } else {
      await DB.execute(
        "INSERT INTO users (`userName`, `email`, `password`, `name`) VALUES (?, ?, ?, ?)",
        [...values]
      );
      res.status(200).json("Tạo tài khoản thành công");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const login = async (req, res) => {
  try {
    const selectQuery = "SELECT * FROM users WHERE email = ?";
    const [rows] = await DB.execute(selectQuery, [req.body.email]);

    if (rows.length === 0) {
      res.status(409).json({ message: "Email không tồn tại!" });
      return;
    }

    const user = rows[0];

    const passwordMatch = bcrypt.compareSync(req.body.password, user.password);

    if (passwordMatch) {
      const token = await Jwt.sign({ id: rows[0].id }, "UserID");
      const { password, ...others } = rows[0];
      res
        .cookie("accessToken ", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ message: "Đăng nhập thành công", ...others });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("dang xuat ok");
};
export const test = (req, res) => {
  return res.send("fsdhjdf", cookie);
};

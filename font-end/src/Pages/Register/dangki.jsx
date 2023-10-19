import React from "react";
import { Link } from "react-router-dom";
import "./dangki.scss";

const register = () => {
  return (
    <div className="dangKi">
      <div className="card">
        <div className="left">
          <h1>Đăng nhập.</h1>
          <p>
            Có một số lý do khiến bạn có thể gặp phải vấn đề này. Dưới đây là
            một số điều bạn có thể kiểm tra: Bạn đã cài đặt phần mở rộng JSX
            Snippets đúng cách chưa? Bạn có thể kiểm tra bằng cách mở Visual
          </p>
          <span>Bạn có tài khoản </span>
          <Link to="/Login">
            <button>Đăng nhập </button>
          </Link>
        </div>
        <div className="right">
          <h1>Đăng nhập</h1>
          <form action="">
            <input type="text" placeholder="Tên" />
            <input type="text" placeholder="Họ tên " />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Mật khẩu " />
            <button>Đăng nhập</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default register;

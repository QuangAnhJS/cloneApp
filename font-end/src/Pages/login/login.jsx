import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello world.</h1>
          <p>
            Có một số lý do khiến bạn có thể gặp phải vấn đề này. Dưới đây là
            một số điều bạn có thể kiểm tra: Bạn đã cài đặt phần mở rộng JSX
            Snippets đúng cách chưa? Bạn có thể kiểm tra bằng cách mở Visual
          </p>
          <span>Bạn không có tài khoản ? </span>
          <button>Đăng kí </button>
        </div>
        <div className="right">
          <h1>Đăng nhập</h1>
          <form action="">
            <input type="text" placeholder="Tên đăng nhập" />
            <input type="password" placeholder="Mật khẩu " />
            <button>Đăng nhập</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

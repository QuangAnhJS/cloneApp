import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './dangki.scss';

const Register = () => {
  const [input, setInput] = useState({
    userName: '',
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/auth/register', input);
    } catch (error) {
      // setError(error.response.data);
      alert(error.response.data);
    }
  };
  console.log(error);
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
            <input
              type="text"
              placeholder="Tên"
              name="userName"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Họ tên "
              name="name"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Mật khẩu "
              name="password"
              onChange={handleChange}
            />

            <button onClick={handleClick}>Đăng nhập</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

import { Link, useNavigate } from 'react-router-dom';
import './login.scss';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AthContext';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(input);
      nav('/');
    } catch (error) {
      setError(error.response.data);
    }
  };
  const nav = useNavigate();
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
          <Link to="/Register">
            <button>Đăng kí </button>
          </Link>
        </div>
        <div className="right">
          <h1>Đăng nhập</h1>
          <form action="">
            <input
              type="text"
              placeholder="Tên đăng nhập"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Mật khẩu "
              name="password"
              onChange={handleChange}
            />
            {error && error}
            <button onClick={handleLogin}>Đăng nhập</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

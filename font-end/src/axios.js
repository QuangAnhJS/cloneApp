import axios from 'axios';

export const makeRequest = axios.create({
  baseURL: 'http://localhost:8080/api/',
  withCredentials: true,
  // các yêu cầu HTTP nên gửi cookies và thông tin xác thực đi kèm.
});

import axios from 'axios';
const api = axios.create({
  baseURL: 'https://backend-09bm.onrender.com/api',
  headers: { 'Content-Type': 'application/json' },
});
api.interceptors.request.use(config => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  if (user.email && user.password) {
    config.auth = { username: user.email, password: user.password };
  }
  return config;
});
export default api;

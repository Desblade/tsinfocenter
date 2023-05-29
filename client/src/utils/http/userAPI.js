import jwtDecode from 'jwt-decode';
import { $host } from './http';

const registerAPI = async (registerData) => {
  const { data } = await $host.post('/user/register', registerData);

  localStorage.setItem('token', data.token);

  return jwtDecode(data.token);
};

const loginAPI = async (loginData) => {
  const { data } = await $host.post('/user/login', loginData);

  localStorage.setItem('token', data.token);

  return jwtDecode(data.token);
};

const checkTokenAPI = async () => {
  const { data } = await $host.get('/user/checkToken');

  localStorage.setItem('token', data.token);

  return jwtDecode(data.token);
};

export {
  registerAPI,
  loginAPI,
  checkTokenAPI,
};

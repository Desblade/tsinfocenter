import { makeAutoObservable } from 'mobx';
import { checkTokenAPI, loginAPI, registerAPI } from '../utils/http/userAPI';

class UserStore {
  constructor() {
    this._user = {};
    this._isAuth = false;

    makeAutoObservable(this);
  }

  setUser(user) {
    this._user = user;
  }

  setIsAuth(boolean) {
    this._isAuth = boolean;
  }

  async registered(registerData) {
    try {
      const data = await registerAPI(registerData);

      this.setUser(data);
      this.setIsAuth(true);
    } catch (e) {
      throw { error: e.response.data.message };
    }
  }

  async login(loginData) {
    try {
      const data = await loginAPI(loginData);

      this.setUser(data);
      this.setIsAuth(true);
    } catch (e) {
      throw { error: e.response.data.message }
    }
  }

  async resignToken() {
    try {
      const data = await checkTokenAPI();

      this.setUser(data);
      this.setIsAuth(true);
    } catch (e) {
      localStorage.removeItem('token');

      this.setUser({});
      this.setIsAuth(false);
    }
  }

  logout() {
    this.setUser({});
    this.setIsAuth(false);

    localStorage.removeItem('token');
  }

  get user() {
    return this._user;
  }

  get isAuth() {
    return this._isAuth;
  }
}

export {
  UserStore,
};

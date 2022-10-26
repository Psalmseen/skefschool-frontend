import { makeAutoObservable } from 'mobx';
import { IUser } from '../utils/interfaces';

class UserStore {
  constructor() {
    makeAutoObservable(this);
    this.loadUser();
  }
  isloggedIn = false;
  user: null | IUser = null;
  setIsLoggedin(status: boolean) {
    this.isloggedIn = status;
    localStorage.setItem('userLoggedIn', JSON.stringify(status));
  }
  loadUser() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const isUserLoggedIn = JSON.parse(
      localStorage.getItem('userLoggedIn') || 'false'
    );
    this.setUser(user);
    this.setIsLoggedin(isUserLoggedIn);
  }
  async setUser(user: IUser) {
    this.user = { ...this.user, ...user };
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}

export const userStore = new UserStore();

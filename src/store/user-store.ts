import { makeAutoObservable } from 'mobx';
import { IUser } from '../utils/interfaces';

class UserStore {
  constructor() {
    makeAutoObservable(this);
    this.loadUser();
  }
  isloggedIn = false;
  user: null | IUser = null;
  setIsLoggedin() {
    this.isloggedIn = !!JSON.parse(localStorage.getItem('user') || '{}')?.email;

    localStorage.setItem('userLoggedIn', JSON.stringify(this.isloggedIn));
  }
  loadUser() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    this.setUser(user);
    this.setIsLoggedin();
  }
  async setUser(user: IUser | null) {
    this.user = user ? { ...this.user, ...user } : user;
    localStorage.setItem('user', JSON.stringify(this.user));
    this.setIsLoggedin();
  }
  async deleteUser() {
    this.setUser(null);
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}

export const userStore = new UserStore();

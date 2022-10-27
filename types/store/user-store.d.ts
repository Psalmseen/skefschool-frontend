import { IUser } from '../utils/interfaces';
declare class UserStore {
    constructor();
    isloggedIn: boolean;
    user: null | IUser;
    setIsLoggedin(status: boolean): void;
    loadUser(): void;
    setUser(user: IUser): Promise<void>;
}
export declare const userStore: UserStore;
export {};

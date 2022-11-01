import axios from 'axios';
import { userStore } from '../store/user-store';
import { backendHost } from './utils';

const getApiToken = () => {
  return userStore.user!.accessToken;
};
export const authFetch = axios.create({
  baseURL: `${backendHost}/api/auth`,
  withCredentials: true,
  headers: {
    // Authorization: `Bearer ${getApiToken()}`,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

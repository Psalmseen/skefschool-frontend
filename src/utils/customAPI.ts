import axios from 'axios';
import { backendHost } from './utils';

export const authFetch = axios.create({
  baseURL: `${backendHost}/api/auth`,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

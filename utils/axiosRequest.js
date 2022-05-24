import axios from 'axios';
import { BACKEND_URL } from './consts';

export const publicRequest = axios.create({
  baseURL: BACKEND_URL,
});

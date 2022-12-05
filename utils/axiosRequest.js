import axios from 'axios';
import { BACKEND_URL } from './consts';

export const publicRequest = axios.create({
  baseURL: BACKEND_URL,
});

export const getServerSideProps = axios.create({
  // baseURL: 'https://citron-en-limonade.herokuapp.com/api',
  baseURL: 'https://cel-backend.vercel.app/',
});

export const getStaticProps = axios.create({
  // baseURL: 'https://citron-en-limonade.herokuapp.com/api',
  baseURL: 'https://cel-backend.vercel.app/',
});

import axios from 'axios';

const API_URL = window.location.origin;
const accessToken = localStorage?.getItem('x-social-block');

export const socialApi = axios.create({
  baseURL: API_URL,
  headers: {
    'content-Type': 'application/json',
    authorization: accessToken ? `Bearer ${accessToken}` : '',
  },
});

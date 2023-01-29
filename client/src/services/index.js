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

export const loginUser = async (did) => {
  return (await socialApi.post(`/user`, { did: did })).data;
};

export const getProfile = async () => {
  return (await axios.get(`/profile`)).data;
};

export const createProfile = async (profile) => {
  return (await socialApi.put(`/profile`, profile)).data;
};

export const updateProfile = async (profile) => {
  return (await socialApi.post(`/profile`, profile)).data;
};

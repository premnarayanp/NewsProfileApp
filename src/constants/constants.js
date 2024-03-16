const API_ROOT = 'http://localhost:8361/';
//const API_ROOT = 'https://news-api.onrender.com';

export const API_URLS = {
  //API URL for User
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,
};
export const LOCAL_STORAGE_TOKEN_KEY = '__MY_NEWS_API_KEY__';
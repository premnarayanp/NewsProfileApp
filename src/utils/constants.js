//const API_ROOT = 'http://localhost:8361/';
//const API_ROOT = 'https://news-api.onrender.com';
const API_ROOT = 'http://192.168.35.253:8361';
export const API_URLS = {
  //API URL for User
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,
  topHeadLineNews: () => `${API_ROOT}/news/topHeadLine`,
  allNews: () => `${API_ROOT}/news/search/everyThing`,
};
export const LOCAL_STORAGE_TOKEN_KEY = '__MY_NEWS_API_KEY__';
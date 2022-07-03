import axios from 'axios';
import LocalStorage from '@/utils/LocalStorage';
import AppConfig from '@/config/AppConfig';

let tokenStorage = new LocalStorage(true);

const request = axios.create({
  baseURL: AppConfig.APP_REQUEST_URL,
  timeout: 30000,
});

request.interceptors.request.use((config) => {
  config.headers = config.headers || {};
  config.headers.token = tokenStorage.get('token') || '';
  config.headers.sign = '1';
  return config;
});

request.interceptors.response.use(
  (res) => {
    let code = res.data.code;
    if (code == 0) {
      return Promise.reject(res.data);
    }
    return res.data;
  },
  (err) => {
    err.msg = err.message;
    return Promise.reject(err);
  }
);

export default request;

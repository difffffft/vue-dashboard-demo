/**
 * 简介:LocalStorage对基础的localStorage实现了基础封装
 * 功能点1:AES加密存储
 * 功能点2:存储有效时间,过期自动删除,常用于存储token
 * 依赖:yarn add crypto-js
 */
const CryptoJS = require('crypto-js');
import AppConfig from '@/config/AppConfig';

class LocalStorage {
  encryption = false;

  constructor(encryption = false) {
    this.encryption = encryption;
  }

  set(k, value, t) {
    if (this.encryption) {
      value = CryptoJS.AES.encrypt(
        value,
        AppConfig.LOCAL_STORAGE_SECRET_KEY
      ).toString();
    }
    let obj = {
      value,
    };
    if (t) {
      obj = {
        ...obj,
        saveTime: new Date().getTime(),
        validTime: t,
      };
    }
    let str = JSON.stringify(obj);
    localStorage.setItem(k, str);
  }
  get(k) {
    let res = localStorage.getItem(k);
    if (res) {
      let obj = JSON.parse(res);
      if (this.encryption) {
        let bytes = CryptoJS.AES.decrypt(
          obj.value,
          AppConfig.LOCAL_STORAGE_SECRET_KEY
        );
        obj.value = bytes.toString(CryptoJS.enc.Utf8);
      }
      if (obj.validTime) {
        let n = new Date().getTime();
        let s = obj.saveTime;
        let e = s + obj.validTime * 1000;
        if (n > e) {
          this.del(k);
          return null;
        } else {
          return obj.value;
        }
      } else {
        return obj.value;
      }
    }
    return res;
  }
  del(k) {
    localStorage.removeItem(k);
  }
  clear() {
    localStorage.clear();
  }
}

export default LocalStorage;

import request from '@/plugin/request';

export function reqLogin(data) {
  return request({
    url: '/user/login',
    method: 'POST',
    data,
  });
}

import queryString from 'query-string';
import _ from 'lodash';

import config from './config';

const { header } = config;
const request = {};

// 封装get请求
request.get = (url, params) => {
  if (params) {
    url += '?' + queryString.stringify(params);
  }

  return fetch(url)
    .then(res => res.json())
    .then(res => console.log(res))
}

// 封装post请求
request.post = (url, body) => {
  let option = _.extend(header, {
    body: JSON.stringify(body),
  });

  return fetch(url, option)
    .then(res => res.json())
    .then(res => console.log(res))
}
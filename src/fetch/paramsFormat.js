import md5 from 'md5'
// import { stringKey, getStore } from '../global/utils'
// import { stringKey } from '../global/utils'

// ascII码 => 字符串
const stringKey = key => key.map(v => String.fromCharCode(v)).join('')

// const SIGN_KEY = [51, 56, 66, 54, 50, 50, 67, 51, 57, 67, 70, 55, 70, 52, 55, 57, 55, 69, 67, 65, 51, 50, 57, 70, 69, 55, 49, 48, 52, 50, 53, 55]
const SIGN_KEY = require('../../apiConfig').key;
const getNow = () => parseInt(new Date().getTime() / 1000)

// 获取sign
const getSign = params => {
  let arr = [];
  let beforeMd5 = '';
  for (let kv of Object.entries(params)) {
    // if (!kv[1]) continue;
    arr.push(kv.join('='));
  }
  beforeMd5 = arr.sort().join('&') + '&key=' + stringKey(SIGN_KEY);
  return md5(beforeMd5)
}

// address=是&city=北京市&district=东城区&is_default=0&phone=13728758660&province=北京&rtime=1508573153&token=e8762508a55f1a62465c5730d775be8d&uid=10004&user=1&key=38B622C39CF7F4797ECA329FE7104257
// address=大&city=北京市&district=东城区&id=0&is_default=0&phone=13828758660&province=北京&rtime=1508573206&token=e8762508a55f1a62465c5730d775be8d&uid=10004&user=4564&key=38B622C39CF7F4797ECA329FE7104257

// 去除传参空字段
const filterNull = params => {
  let obj = {};
  for (let k in params) {
    if (params[k] === '' || params[k] === undefined) {
      continue
    }
    obj[k] = params[k]
  }
  return obj;
}

export const addCommonParams = (params, user) => {
  params = Object.assign(filterNull(params), { rtime: getNow() });
  let aia = {
    uid: "10004",
    token: "e8762508a55f1a62465c5730d775be8d"
  };
  if (user) {
    // params = Object.assign(params, JSON.parse(localStorage.getItem('kuWaUserInfo')))
    params = Object.assign(params, aia)
  }
  let sign = getSign(params).toUpperCase();
  return Object.assign(params, { sign });
}

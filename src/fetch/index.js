import { baseUrl } from '../config/index'
import axios from 'axios';
import Vue from 'vue';
import Store from '../store'
import qs from 'qs';
import { addCommonParams } from './paramsFormat'
axios.defaults.baseURL = baseUrl;
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 全局ajax请求拦截器
// POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  console.log(error);
  // Vue.prototype.toast('错误的传参')
  // return Promise.reject(error)
})

// const HttPFUN = (url, data) => {
//   // let _url = url;
//   // let _data = data;
//   return new Promise((resove, reject) => {
//     axios({ method: 'post', url: url, data: data })
//       .then((responce) => {
//         let _reData = responce.data;
//         resove(_reData);
//       }, (err) => {
//         reject(err)
//       })
//       .catch((error) => {
//         reject(error)
//       })
//   })
// }
const _closeLoading = () => { Store.dispatch('showLoading', false) }
const _openLoading = () => { Store.dispatch('showLoading', true) }
const fetchs = (url, params = {}, user = true) => {
  console.log(url);
  setTimeout(_openLoading, 0);
  params = addCommonParams(params, user);
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        setTimeout(_closeLoading, 100);
        let _reData = response.data;
        if (_reData.errcode !== 0) {
          Vue.prototype.$toast({
            message: _reData.errmsg,
            position: 'bottom',
            duration: 2000
          });
          return;
        }
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export default fetchs;

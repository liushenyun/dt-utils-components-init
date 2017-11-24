import Vue from 'vue';
Vue.filter('filterTypeChange', function(num) {
  let _num = Number(num);
  let _typeArr = ['PP1棉滤芯', '前置活性炭滤芯', 'RO反渗透滤芯', '后置活性炭滤芯'];
  return _typeArr[_num + 1]
});
// 小于10补零
let addZero = (num) => {
  if (num < 10) {
    return '0' + num
  } else {
    return '' + num
  }
};
// 时间戳转换 后台传递过来的时间戳是十位的 =>2017-11-17 18:08:02
Vue.filter('formatDate', function(num, type = '-') {
  let _num = Number(num) * 1000;
  let _today = new Date(_num);
  let _year = _today.getFullYear();
  let _month = _today.getMonth() + 1;
  let _day = _today.getDate();
  let _hour = _today.getHours();
  let _min = _today.getMinutes();
  let _sec = _today.getSeconds();
  return _year + type + _month + type + _day + ' ' + addZero(_hour) + ':' + addZero(_min) + ':' + addZero(_sec);
})

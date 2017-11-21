import Vue from "vue";
// 时间戳转换 后台传递过来的时间戳是十位的
Vue.filter('formatDate', function(num, type = '-') {
  let _num = Number(num) * 1000;
  let _today = new Date(_num);
  let _year = _today.getFullYear();
  let _month = _today.getMonth() + 1;
  let _day = _today.getDate();
  return _year + type + _month + type + _day;
})

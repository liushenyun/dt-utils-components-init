<template>
  <div class="utils-outer">
    <h4>这是页面是用来测试utils</h4>
    <button @click='backHome'>返回主页</button>
    <button>isObject</button>
    <button>isArray</button>
    <button>isEmpty</button>
    <button>isArray</button>
    <button @click="clickAll">debounce</button>
    <button @click="throttless">throttle</button>
    <button @click="isPhoneActive">isPhone</button>
    <button @click="lessThanTenAddZero">lessThanTenAddZero</button>
    <button @click="getTodayDate">getTodayDate</button>
    <button @click="getDateFromSomedayWithDistance">getDateFromSomedayWithDistance</button>
    <button @click="aesEncrypt">加密123456</button>
    <button @click="aesDecrypt">解密</button>
    <button @click="openMqtt">连接mqtt</button>
    <button @click="closeMqtt">关闭mqtt</button>
    <button @click="formatActive">格式化日期</button>
    <button @click="getPCAreadata">获取PC端地区数据</button>
    <dt-upload></dt-upload>
  </div>
</template>

<script>
import debounce from "../utils/debounce";
import { lessThanTenAddZero, DtPCAreaDataPlus, DtPCAreacodeText } from "../utils";
import throttle from "../utils/throttle";
import isPhone from "../utils/isPhone.js";
import getTodayDate from "../utils/getTodayDate.js";
import getDateFromSomedayWithDistance from "../utils/getDateFromSomedayWithDistance.js";
import { aesEncrypt, aesDecrypt } from "../utils/dtAes";
import { openSocket, closeSocket } from "../utils/dtMqtt";
import ddateFormat from '../utils/dateFormat';
// 组件
export default {
  methods: {
    backHome() {
      this.$router.push({ name: "Home" });
    },
    clickAll: debounce(
      function(params) {
        console.log(454);
      },
      500,
      { leading: true }
    ),
    throttless: throttle(function(params) {
      console.log("three");
    }, 1000),
    isPhoneActive() {
      console.log(isPhone(1382875866013828758660));
    },
    lessThanTenAddZero() {
      console.log(lessThanTenAddZero(11));
    },
    getTodayDate() {
      console.log(getTodayDate());
    },
    getDateFromSomedayWithDistance() {
      let someday = "2017-11-23";
      let n = "-5";
      let type = ".";
      console.log(getDateFromSomedayWithDistance(someday, n, type));
    },
    aesEncrypt() {
      this.enData = aesEncrypt(123456);
      console.log(this.enData);
    },
    aesDecrypt() {
      console.log(aesDecrypt(this.enData));
    },
    // 打开mqtt
    openMqtt() {
      console.log("连接mqtt");
      openSocket('e0b94da08400', msg => {
        console.log(msg);
      });
    },
    closeMqtt() {
      closeSocket();
    },
    formatActive() {
      // let data = ddateFormat(new Date(), 'yyyy-MM-dd');
      // let data = ddateFormat(new Date('2016-09-02'), 'yyyy-MM-dd');
      // let data = ddateFormat(new Date('2016-09-02'), 'yyyy-MM-dd hh:mm:ss');
      let data = ddateFormat(new Date(1512347715000), 'yyyy-MM-dd hh:mm:ss');
      console.log(data);
    },
    getPCAreadata() {
      console.log(DtPCAreaDataPlus);
      console.log(DtPCAreacodeText);
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>

</style>


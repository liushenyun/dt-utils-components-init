import GibberishAES from './gibberish-aes'
// let key = [50, 51, 102, 101, 102, 101, 99, 50, 97, 55, 99, 52, 97, 49, 101, 100, 101, 57, 101, 54, 48, 51, 51, 57, 57, 54, 51, 56, 99, 54, 55, 48];
let key = require('../../apiConfig').key;
// aes加密
const aesEncrypt = item => GibberishAES.aesEncrypt(item, key).trim()
  // aes解密
const aesDecrypt = item => GibberishAES.aesDecrypt(item, key)
export {
  aesEncrypt,
  aesDecrypt
}

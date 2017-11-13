let apiUrl = require('../../apiConfig').httpUrl;
let baseUrl = '';
let env = process.env.NODE_ENV;
let isProduction = '';

switch (env) {
  case 'development':
    baseUrl = '/dturl/';
    isProduction = false;
    break
    // case 'testproduction':
    //   baseUrl = apiUrl;
    //   isProduction = false;
    //   break
  case 'production':
    // weChatOnly();
    isProduction = true;
    baseUrl = apiUrl;
    break
}
export {
  baseUrl,
  isProduction
}

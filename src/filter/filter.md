util 过滤器
=========================
## 使用
```js
import './filter/filter';
"{{  '1510913282'| formatDate}}"
```

## 注意事项
- 只会有常规过滤器
- @version 进行版本说明。0.0.1是开发版本未在项目中使用，修改过就需要加1（例：0.0.2）   ；1.0.0是在项目中使用过，之后每次修改就需要加1（例：1.0.1）



## 功能列表(公共)
- formatDate 【时间戳：2017-11-17 18:08:02】

## 功能列表（dt公用）
- dtIsMac 【判断Mac是否正确】

## 单个说明

#### isArray
判断是不是数组
```
/**
 * @param {string} [somebody=John Doe] - Somebody's name.
 */


/**
* @description 判断是不是数组
* @version 0.0.1
* @param { any } value - 传入需要判断的值
* @return { Boolean } true or false
* @example
 * isArray([1, 2, 3]);
 * // => true
 * 
 * isArray('abc');
 * // => false
*/
isArray(value)
```

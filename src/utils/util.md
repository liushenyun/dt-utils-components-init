util 工具行数
=========================
## 使用

##### 单独使用
```js

import isArray from '../util/isArray'
let a = [1,2,3]
isArray(a) // => true or false

```

##### 整体使用

```
import util from '../util/index';
util.isArray([1,2,3])
```
or

```
import { isArray } from '../util/index.js';
util.isArray([1,2,3])
```



## 注意事项
- 'deIsMac':文件夹前有dt是dtston特有的。'isArray':没有dt任何地方都可以使用
- 参考：https://github.com/lodash
- @version 进行版本说明。0.0.1是开发版本未在项目中使用，修改过就需要加1（例：0.0.2）   ；1.0.0是在项目中使用过，之后每次修改就需要加1（例：1.0.1）



## 功能列表(公共)
- isArray 【判断是不是数组】
- isObject【判断是否为对象】
- isEmpty 【判断是否为空】
- isNull 【判断是否为null】
- Throttle 【函数调频】
- Debounce 【函数防抖】
- isMobile 【判断是否为手机号】
- lessThanTenAddZero 【判断值是否小于10，小于10前面补0】
- getTodayDate 【获取今天日期】
- getDateFromSomedayWithDistance(someday,n,type = '-') 【获取某天日期前后的任意天数的日期】
- isNumber 【判断是否为数字（待更新）】
- dateFormat 【日期格式化】


## 功能列表（dt公用）
- dtIsMac 【判断Mac是否正确】
- dtAes 【Aes加密】- 【aesEncrypt（加密），aesDecrypt（解密）】
- dtIsVerificationCode 【验证码验证】
- dtGetUid 【Dtston 微信登陆获取uid、token】


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
#### isObject
判断是否为对象
```
/**
 * 判断是否为对象
 * @version 0.0.1
 * @param { any } value - '[]'or ...
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */
isObject(value)
```
#### isEmpty
判断是否为空 
```js
/**
 * 判断是否为空 
 * @version 0.0.1
 * @param { any } value - '[]'or ...
 * @returns {boolean} Returns `true` if `value` is an Array, else `false`.
 * @example
 *
 * isEmpty({})
 * // => false
 *
 * isEmpty('')
 * // => true
 */
isEmpty(value)
```
#### isNull
判断是否为null 
```
/**
 * 判断是否为null
 * @version 0.0.1
 * @param { any } value - '[]'or ...
 * @returns {boolean} Returns `true` if `value` is an null, else `false`.
 * @example
 *
 * isNull({})
 * // => false
 *
 * isNull(null)
 * // => true
 */
 isNull(value)
```
#### Throttle
控制回调在特定时间调用的次数(每多少毫秒调用一次);
```
/**
 * 函数节流
 * @version 0.0.1
 * @param { Function } func 要执行的函数
 * @oaram { number } [wait=0] - 500 多少毫秒执行一次
 * @oaram options 
 * @example  click事件  vue methods中
 * clickAll: Throttle(function(params) {
 *     console.log(454);
 *   }, 500),
 *
 */
throttle(func, wait, options);
```


#### Debounce
事件触发时不会立即激活回调，相反会等待一定得时间并检查相同的事件是否会再次触发。如果是，重置定时器，并再次等待。如果再等待期间没有发生相同事件，就会立即激活回调。（常用在input里）
```
/**
 * 函数防抖
 * @version 0.0.1
 * @param { Function } func 要执行的函数
 * @poaram { number } [wait=0] - 500 多少毫秒执行一次
 * @param { Object } [ options = {} ] - 可选对象
 * @poaram { boolean } [options.leading=false] - (false)触发500ms执行 || (true)触发后立即执行而后过500ms再次触发
 * @poaram { number } [options.maxWait] - 2000  最多等多久需要触发一次
 * @poaram { boolean } [options.trailing=true] - 最后是否触发
 * @example  click事件  vue methods中
 * clickAll: debounce(function(params) {
 *     console.log(454);
 *   }, 500),
 *
 */

debounce(func, wait, options)
```
#### isPhone
判断是否为手机号 
```
/**
 * 判断是否为手机号
 * @version 0.0.1
 * @param { any } value - '[]'or ...
 * @returns {boolean} Returns `true` if `value` is an null, else `false`.
 * @example
 *
 * isPhone({})
 * // => null
 *
 * isPhone(13828758660)
 * // => ["13828758660"]
 */
 isPhone(value)
```
#### lessThanTenAddZero
判断数值是否小于0，小于0在前面补0 
```
/**
 * 判断数值是否小于0，小于0在前面补0 
 * @version 0.0.1
 * @param { Number||number-string } num - 1 or '8' or 10
 * @returns { String } Returns '01' or '12'
 * @example
 *
 * lessThanTenAddZero(10)
 * // => '10'
 *
 * lessThanTenAddZero(2)
 * // => '02'
 */
 lessThanTenAddZero(num)
```

#### getTodayDate
获取今天日期
```
/**
 * 获取今天日期
 * @version 0.0.1
 * @param { String } type - '-'||'.'||...
 * @returns { String } Returns '2017-02-06'
 * @example
 *
 * getTodayDate()
 * // => '2017-02-06'
 *
 * getTodayDate('.')
 * // => '2017.02.06'
 */
 getTodayDate(num)
```

### getDateFromSomedayWithDistance
获取某天日期前后的任意天数的日期
```
/**
 * 获取某天日期前后的任意天数的日期
 * @version 0.0.1
 * @param { string }
 * @param { DateString }  someday - 某天的日期  例： 2017-1-30 || 2017.1.30 || 2017/1/30 || new Date()【代表今天】
 * @param { Number }  n 任意天数的值 正值：someday之后的日期  负值：someday之前的日期
 * @param { String } [type] 日期连接符
 * @returns { String } Returns 日期字符串 例：2017-11-13 2017.02.06
 * @example
 * getDateFromSomedayWithDistance('2017-11-23',3,'.')
 * => 2017.11.26
 * getDateFromSomedayWithDistance('2017.11.23',-3)
 * => 2017-11-20
 */
 getDateFromSomedayWithDistance('2017-11-23',3,'.')
```


### dateFormat
格式化日期
```
/**
 * 格式化日期
 * @version 0.0.1
 * @param { Date Object } date 日期对象 new Date() || new Date('2016-09-02') || new Date(1512347715000)【时间戳必须是毫秒】....
 * @param { String } fmt 返回格式 'yyyy-MM-dd hh:mm:ss' || 'yyyy.MM.dd' || ...
 * @returns { String } 返回的日期 "2017-12-04 08:35:15" || "2017-12-04" || ...
 * @example
 * dateFormat(new Date(), 'yyyy-MM-dd')
 * => "2017-12-07"
 * dateFormat(new Date('2016-09-02'), 'yyyy.MM.dd hh:mm:ss')
 * => "2016.09.02 08:00:00"
 * dateFormat(new Date(1512347715000), 'yyyy-MM-dd hh:mm:ss')
 * => "2017-12-04 08:35:15"
 */
dateFormat(new Date(1512347715000), 'yyyy-MM-dd hh:mm:ss')
```


--------------
## dt单个说明

### dtIsMac
Dtston Mac验证
```
/**
 * Dtston Mac验证
 * @version 0.0.1
 * @param { String } mac - 'EDS5444545AS'
 * @returns { String || null }  Returns mac字符串 例："EASD56SD9875"
 * @example
 * 
 * dtIsMac('ss')
 * => false
 * dtIsMac('EASD56SD9875')
 * => true
 */
 dtIsMac('EASD56SD9875')
```

### dtAes
Dtston AES加密
```
/**
 * Dtston AES加密  "每个项目需要有不同的key值"
 * @version 0.0.1
 * @example
 * 
 * aesEncrypt('123456') 加密
 * => 'Y+ahQX0nTjpYJeSHV00P0w=='
 * 
 * aesDecrypt('Y+ahQX0nTjpYJeSHV00P0w==') 解密
 * => '123456'
 */
 aesEncrypt('123456');
 aesDecrypt('Y+ahQX0nTjpYJeSHV00P0w==')
```

### dtIsVerificationCode
 Dtston 验证码验证
```
/**
 * Dtston 验证码验证
 * @version 0.0.1
 * @param { String } code - '012456'
 * @returns { false || Strng } Returns false or '123456' or null
 * @example
 * 
 * isVerificationCode('4556')
 * => false
 */
 isVerificationCode('4556')
```

### dtGetUid
Dtston 微信登陆
```
/**
 * Dtston getUidToken
 * @version 0.0.1
 * @returns { Object } args - {uid:'10004',token:'dsldkoe2987dasdkjhjk'}
 */
 let UserInfo = dtGetUid()
```
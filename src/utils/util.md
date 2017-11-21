util
DT 工具行数
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
- 参考：https://github.com/lodash
- @version 进行版本说明。0.0.1是开发版本未在项目中使用，修改过就需要加1（例：0.0.2）   ；1.0.0是在项目中使用过，之后每次修改就需要加1（例：1.0.1）



## 功能列表
- isArray 【判断是不是数组】
- isObject【判断是否为对象】
- isEmpty 【判断是否为空】
- isNull 【判断是否为null】
- Throttle 【函数调频】
- Debounce 【函数防抖】
- isMobile 【判断是否为手机号】

- isNumber 【判断是否为数字（待更新）】

- dtGetToday 【获取今天日期（待更新）】
- dtGetDateFromToday 【获取从今天到n天前的日期（待更新）】




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

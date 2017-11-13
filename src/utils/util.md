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
- @version 进行版本说明。0.0.1是开发版本未在项目中使用，修改过就需要加1（例：0.0.2）   ；1.0.0是在项目中使用过，之后每次修改就需要加1（例：1.0.1）



## 功能列表
- isArray 【判断是不是数组】
- isObject【判断是否为对象】
- isEmpty 【判断是否为空】
- isNull 【判断是否为null】
- isNumber 【判断是否为数字（待更新）】
- isMobile 【判断是否为手机号（待更新）】
- dtGetToday 【获取今天日期（待更新）】
- dtGetDateFromToday 【获取从今天到n天前的日期（待更新）】
- 



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
控制回调在特定时间调用的次数

#### Debounce
事件触发时不会立即激活回调，相反会等待一定得时间并检查相同的事件是否会再次触发。如果是，重置定时器，并再次等待。如果再等待期间没有发生相同事件，就会立即激活回调。（常用在input里）
#### Immediate
Immediate 是 立即激活回调，然后等待后续事件在一定时间内触发
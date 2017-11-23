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
 * isEmpty([1, 2, 3])
 * // => false
 *
 * isEmpty('')
 * // => true
 */
let isEmpty = function(str) {
  if (str !== null && str.length === 0) {
    return true;
  }
  return false;
}

export default isEmpty;

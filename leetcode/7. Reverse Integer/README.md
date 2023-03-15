- https://leetcode.com/problems/reverse-integer/
- Runtime: 68 ms
- Memory Usage: 44.1 MB

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isNegative = x < 0;
  const input = (isNegative ? -x : x).toString().split('');
  const num = Number(input.reverse().join(''));

  if (!isNegative && num > Math.pow(2, 31) -1) return 0;
  if (isNegative && num > Math.pow(2, 31)) return 0;

  return isNegative ? -num : num;
};
```
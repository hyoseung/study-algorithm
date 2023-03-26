- https://leetcode.com/problems/string-to-integer-atoi/
- Runtime: 68 ms
- Memory Usage: 44.4 MB

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
https://on1ystar.github.io/javascript/2021/03/30/JavaScript-7/
`isNaN(' ')` &rarr; false 숫자로 인식 (Number로 형 변환)
`Number.isNaN(' ')` &rarr; false (오로지 NaN일때만 true, 엄격함)

```js
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let output = '';
    let isNegative = false;

    for(let i = 0; i < s.length; i++) {
        if(!output && ' ' === s[i]) continue;
        if(!output && ['-', '+'].includes(s[i])) {
            output += s[i];
            isNegative = '-' === s[i];
            continue;
        }
        if(!isNaN(s[i]) && s[i] !== ' ') {
            output += s[i];
            continue;
        }

        break;
    }

    // +, - 판단하기 위함
    if (isNaN(output)) return 0;

    const num = Number(output);
    const absNum = Math.abs(num);

    if (!isNegative && absNum > Math.pow(2, 31) -1) return Math.pow(2, 31) -1;
    if (isNegative && absNum > Math.pow(2, 31)) return -Math.pow(2, 31);

    return num;
};
```

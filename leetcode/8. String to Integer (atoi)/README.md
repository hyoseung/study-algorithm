- https://leetcode.com/problems/string-to-integer-atoi/
- Runtime: 68 ms
- Memory Usage: 44.4 MB

`isNaN(' ')` &rarr; false 숫자로 인식

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

    if (isNaN(output)) return 0;

    const num = Number(output);
    const absNum = Math.abs(num);

    if (!isNegative && absNum > Math.pow(2, 31) -1) return Math.pow(2, 31) -1;
    if (isNegative && absNum > Math.pow(2, 31)) return -Math.pow(2, 31);

    return num;
};
```
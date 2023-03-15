- https://leetcode.com/problems/zigzag-conversion/
- Runtime: 89 ms
- Memory Usage: 47.7 MB

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let idx = 0;
    let idxArr = [0];
    let output = [];

    if (numRows > 1) {
        for(let i = 1; i <= numRows - 1; i++) idxArr.push(i);
        for(let i = numRows - 2; i > 0; i--) idxArr.push(i);
    }

    for(let i = 0; i < s.length; i++) {
        const numRow = idxArr[idx % idxArr.length];
        if(!output?.[numRow]) {
            output.push(s[i]);
        } else {
            output[numRow] += s[i];
        }
        idx++;
    }

    return output.join('');
};
```
- https://leetcode.com/problems/roman-to-integer/
- Runtime: 145 ms
- Memory Usage: 47.9 MB

```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    }
    let idx = s.length - 1;
    let prev = '';
    let output = 0;

    while (!!s[idx]) {
        const current = s[idx];
     
        if (['V', 'X'].includes(prev) && current === 'I') {
            output -= map[current];
        } else if (['L', 'C'].includes(prev) && current === 'X') {
            output -= map[current];
        } else if (['D', 'M'].includes(prev) && current === 'C') {
            output -= map[current];
        } else {
            output += map[current];
        }

        prev = current;
        idx--;
    }

    return output;
};
```
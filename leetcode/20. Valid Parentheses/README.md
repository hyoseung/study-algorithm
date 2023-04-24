- https://leetcode.com/problems/valid-parentheses/
- Runtime: 68 ms
- Memory Usage: 44.3 MB

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    const stack = [];
    let flag = true;

    s.split('').forEach(e => {
        if (Object.values(brackets).includes(e)) {
            stack.push(e);
        } else {
            if (stack[stack.length-1] === brackets[e]) {
                stack.pop();
            } else {
                flag = false;
            }
        }
    });

    return stack.length === 0 && flag;
};
```
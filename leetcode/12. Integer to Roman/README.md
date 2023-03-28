- https://leetcode.com/problems/integer-to-roman/
- Runtime: 122 ms
- Memory Usage: 47.1 MB

```js
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const key = [1000, 500, 100, 50, 10, 5, 1];
    const value = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    let output = '';
    let input = num;
    
    for(let i=0; i<key.length; i++) {
        const quotient = parseInt(input / key[i]);
        if (quotient === 0) continue;

        const first = input.toString()[0];
        let str = '';

        if (first === '9') {
            // key[i] = 500, 50, 5 일 때, 9로 시작하는 숫자 걸림
            str = value[i+1] + value[i-1];
            input = input - (9 * key[i+1]);
        } else if (first === '4') {
            // key[i] = 100, 10, 1 일 때, 4로 시작하는 숫자 걸림
            str = value[i] + value[i-1];
            input = input - (4 * key[i])
        } else {
            str = value[i].repeat(quotient);
            input = input % key[i];
        }

        output += str;
    }

    return output;
};
```
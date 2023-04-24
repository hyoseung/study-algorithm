- https://leetcode.com/problems/letter-combinations-of-a-phone-number/
- Runtime: 51 ms
- Memory Usage: 42.4 MB

DFS로 풀어야함

```js
/**
 * "234"
 * ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"]
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return [];

    const phoneMap = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }
    const digitArr = digits.split(''); // ['2', '3', '4']
    let result = [];

    digitArr.forEach(d => {
        if (result.length === 0) {
            result = phoneMap[d]; // 2 -> ['a', 'b', 'c']
        } else {
            let tmp = [];
            result.forEach(i => { 
                phoneMap[d].forEach(j => {
                    tmp.push(i+j);
                });
                // d = '3' : tmp = ['ad', 'ae', 'af', 'bd', 'be', 'bf' ...]
                // d = '4' : tmp = ['adg', 'adh', 'adi', 'aeg', 'aeh' ...]
            });
            result = tmp;
        }
    })

    return result;
};
```
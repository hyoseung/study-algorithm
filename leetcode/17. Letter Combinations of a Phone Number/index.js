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
    const digitArr = digits.split('');
    let result = [];

    digitArr.forEach(d => {
        if (result.length === 0) {
            result = phoneMap[d];
        } else {
            let tmp = [];
            result.forEach(i => {
                phoneMap[d].forEach(j => {
                    tmp.push(i+j);
                })
            });
            result = tmp;
        }
    })

    return result;
};
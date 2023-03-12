/**
 * Runtime: 77 ms
 * Memory Usage: 46.1 MB
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let output = 0;
    let temp = [];

    for(let i = 0; i < s.length; i++) {
        const element = s[i];
        if (temp.length === 0) {
            temp.push(element);
        } else {
            const idx = temp.indexOf(element);
            if (idx > -1) {
                output = output >= temp.length ? output : temp.length;
                temp.splice(0, idx+1);
            }

            temp.push(element);
        }
    }

    return output >= temp.length ? output : temp.length;
};
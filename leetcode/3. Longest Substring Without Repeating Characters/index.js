/**
 * Runtime: 77 ms
 * Memory Usage: 46.4 MB
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const arr = s.split('');
  let output = 0;
  let temp = [];

  arr.forEach(i => {
      if (temp.length === 0) {
          temp.push(i);
      } else {
          const idx = temp.indexOf(i);
          if (idx > -1) {
              output = output >= temp.length ? output : temp.length;
              temp.splice(0, idx+1);
              temp.push(i)
          } else {
              temp.push(i);
          }
      }
  });

  return output >= temp.length ? output : temp.length;
};
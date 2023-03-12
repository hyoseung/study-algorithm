/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const SIZE = s.length;
  let len = s.length;

  while(len >= 2) {
      for(let i = 0; i <= SIZE - len; i++) {
          let start = i;
          let end = i + len - 1;
          let match_count = 0;

          while(start <= end && s[start] === s[end]) {
              start++;
              end--;
              match_count++;
          }
      
          if (Math.ceil(len / 2) === match_count) {
              return s.slice(i, i+len);
          }
      }
      len--;
  }
  return s[0];
};
- https://leetcode.com/problems/longest-palindromic-substring/
- Runtime: 253 ms
- Memory Usage: 42.7 MB

palindromic string: 뒤집어도 같은 문자

```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) return s;

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
```
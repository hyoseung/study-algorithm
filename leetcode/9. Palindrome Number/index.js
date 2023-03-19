/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;

  const str = x.toString();
  let start = 0;
  let end = str.length - 1;

  while(start <= end) {
      if (str[start] !== str[end]) return false;
      start++;
      end--;
  }

  return true;
};
/**
 * Runtime: 7043 ms
 * Memory Usage: 51.4 MB
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const arr = s.split('');
  let output = '';

  if (arr.length < 2) return s;

  arr.forEach((element, idx) => {
      const temp = arr.slice(idx);
      const size = temp.length;
      for(let i = size-1; i >= 1; i--) {
          if(temp[i] === element) {
              const temp2 = temp.slice(0, i+1);
              const size2 = temp2.length;
              if (size2 % 2 === 0) {
                  const front = temp2.slice(0, size2/2).join('');
                  const rear = temp2.slice(size2/2, size2).reverse().join('');
                  if(front === rear) {
                      output = output.length >= temp2.length ? output : temp2.join('');
                      break;
                  }
              } else {
                  const front = temp2.slice(0, parseInt(size2/2)).join('');
                  const rear = temp2.slice(parseInt(size2/2)+1, size2).reverse().join('');
                  if(front === rear) {
                      output = output.length >= temp2.length ? output : temp2.join('');
                      break;
                  }   
              }
          } else {
              output = output.length >= 1 ? output : element;
          }
      }
  });

  return output;
};
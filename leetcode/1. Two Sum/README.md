- https://leetcode.com/problems/two-sum/
- Runtime: 112 ms
- Memory Usage: 42.3 MB

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let output = [];
  const size = nums.length;
  let correct = false;

  for (let i = 0;  i < size; i++) {
      for (let j = i+1; j < size; j++) {
          let sum = nums[i] + nums[j];
          if (sum === target) {
              correct = true;
              output = [i, j];
              break;
          }
      }
      if (correct) break;
  }

  return output;
};
```
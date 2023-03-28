/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while(left <= right) {
      let amount = right - left; // width
      if (height[left] <= height[right]) {
          // left 높이가 낮으면 오른쪽으로 이동
          amount *= height[left];
          left++;
      } else {
          // right 높이가 낮으면 왼쪽으로 이동
          amount *= height[right];
          right--;
      }
      max = amount > max ? amount : max;
  }

  return max;
};
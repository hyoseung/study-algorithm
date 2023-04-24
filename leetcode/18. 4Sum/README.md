- https://leetcode.com/problems/4sum/
- Runtime: 85 ms
- Memory Usage: 44.6 MB

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    // 오름차순 정렬
    nums.sort(function(a, b) {
        return a - b;
    });
    const size = nums.length;
    let output = [];

    // 4개를 찾아야하기 때문에 0 ~ length-4 인덱스까지 체크
    for (let i=0; i<size-3; i++) {
        // 중복되는 숫제 제외
        if (i > 0 && nums[i] === nums[i-1]) continue;

        const firstNum = nums[i];

        for (let j=i+1; j<size-2; j++) {
            // 중복되는 숫제 제외
            if (j > i+1 && nums[j] === nums[j-1]) continue;

            const secondNum = nums[j];

            let left = j+1;
            let right = size-1;
            while(left < right) {
                const sum = firstNum + secondNum + nums[left] + nums[right];
                if (sum === target) {
                    // 중복되는 숫제 제외
                    if (output.length > 0 && 
                    output[output.length-1][0] === firstNum && 
                    output[output.length-1][1] === secondNum && 
                    output[output.length-1][2] === nums[left] && 
                    output[output.length-1][3] === nums[right]) {
                        left++;
                        continue;
                    }
                    output.push([firstNum, secondNum, nums[left], nums[right]]);
                    left++;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return output;
};
```
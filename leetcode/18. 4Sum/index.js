/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort(function(a, b) {
        return a - b;
    });
    const size = nums.length;
    let output = [];

    for (let i=0; i<size-3; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;

        const firstNum = nums[i];

        for (let j=i+1; j<size-2; j++) {
            if (j > i+1 && nums[j] === nums[j-1]) continue;

            const secondNum = nums[j];

            let left = j+1;
            let right = size-1;
            while(left < right) {
                const sum = firstNum + secondNum + nums[left] + nums[right];
                if (sum === target) {
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
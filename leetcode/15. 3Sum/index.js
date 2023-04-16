/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 오름차순 정렬
    nums.sort(function(a, b) {
        return a - b;
    });
    const size = nums.length;
    let output = [];

    // 3개를 찾아야하기 때문에 0 ~ length-3 인덱스까지 체크
    for (let i=0; i<size-2; i++) {
        // 중복되는 숫제 제외
        if (i > 0 && nums[i] === nums[i-1]) continue;

        const firstNum = nums[i];
        let left = i+1;
        let right = size-1;
        while(left < right) {
            const sum = firstNum + nums[left] + nums[right];
            if (sum === 0) {
                // 두번째, 세번째 중복되는 숫제 제외 ex) [0,0,0,0], [-1,-1,-1,0,1,1]
                if (output.length > 0 && output[output.length-1][1] === nums[left] && output[output.length-1][2] === nums[right]) {
                    left++;
                    continue;
                }
                output.push([firstNum, nums[left], nums[right]]);
                left++;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return output;
};
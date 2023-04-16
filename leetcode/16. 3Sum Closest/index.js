/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // 오름차순 정렬
    nums.sort(function(a, b) {
        return a - b;
    });
    const size = nums.length;
    let output = null;

    // 3개를 찾아야하기 때문에 0 ~ length-3 인덱스까지 체크
    for (let i=0; i<size-2; i++) {
        // 중복되는 숫제 제외
        if (i > 0 && nums[i] === nums[i-1]) continue;

        const firstNum = nums[i];
        let left = i+1;
        let right = size-1;
        while(left < right) {
            const sum = firstNum + nums[left] + nums[right];
            if (sum === target) {
                return sum;
            } else {
                if (output === null) output = sum;
                else {
                    const outputDiff = Math.abs(output - target);
                    const sumDiff = Math.abs(sum - target);
                    output = outputDiff > sumDiff ? sum : output;
                }
                
                if (sum < target) left++;
                else right--;
            }
        }
    }
    return output;
};
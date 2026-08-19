class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        if(nums.length === 1 ) return target === nums[0] ? 0 : -1;
        let left = 0;
        let right = nums.length - 1;
        while(left < right) {
            let middle = left + Math.floor(((right - left) / 2));
            const currentValue = nums[middle];
            if(currentValue === target) return middle;
            else if(currentValue < target) {
                left = middle + 1;
            }
            else {
                right = middle;
            }
            if(left === right) {
                return nums[left] === target ? left : -1;
            }
        }
        return -1;
    }
}

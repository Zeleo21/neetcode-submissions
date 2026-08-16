class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const targets = new Map<number,number>();
        for(let i = 0 ; i < nums.length; i++) {
            const diff = target - nums[i];
            if(targets.has(diff)) return [targets.get(diff), i];
            targets.set(nums[i], i);
        }
    }
}

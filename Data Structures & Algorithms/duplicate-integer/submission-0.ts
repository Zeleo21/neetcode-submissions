class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const duplicates = new Map<number, boolean>();
        for(const val of nums) {
            if(duplicates.has(val)) return true;
            duplicates.set(val, true);
        }
        return false;
    }
}

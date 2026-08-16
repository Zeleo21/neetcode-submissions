class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sCharCounts = new Map<string, number>;
        const tCharCounts = new Map<string, number>;
        for(const char of s) {
            sCharCounts.has(char) ? sCharCounts.set(char, sCharCounts.get(char) + 1) : sCharCounts.set(char, 1);
        }
        for(const char of t) {
            tCharCounts.has(char) ? tCharCounts.set(char, tCharCounts.get(char) + 1) : tCharCounts.set(char, 1);
        }
        for(const [key, val] of sCharCounts) {
            if(!tCharCounts.has(key)) return false;
            if(tCharCounts.get(key) !== val) return false;
        }
        for(const [key, val] of tCharCounts) {
            if(!sCharCounts.has(key)) return false;
            if(sCharCounts.get(key) !== val) return false;
        }
        return true;
    }
}

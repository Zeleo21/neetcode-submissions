class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleanedString = s.replaceAll(/[^A-Za-z0-9]/g, '').toLowerCase();
        for(let i = 0 ; i < cleanedString.length / 2; i++) {
            if(cleanedString[i] !== cleanedString[cleanedString.length - i - 1]) return false;
        }
        return true;
    }
}

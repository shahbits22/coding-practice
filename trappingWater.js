/**
 * Trapping Rain Water
 * https://leetcode.com/problems/trapping-rain-water/description/
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
 * 
 * Example:
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
 */

/**
 * @param {number[]} height
 * @return {number}
 */

 var trap = function (height) {
    let l = 0; let r = height.length - 1;
    let leftMax = rightMax = ans = 0;

    while (l < r) {
        if (height[l] < height[r]) {
            if (height[l] > leftMax) {
                leftMax = height[l];
            } else {
                ans = ans + (leftMax - height[l]);
            }
            l++;
        } else {
            if (height[r] > rightMax) {
                rightMax = height[r];
            } else {
                ans = ans + (rightMax - height[r]);
            }
            r--;
        }
    }

    return ans;
};
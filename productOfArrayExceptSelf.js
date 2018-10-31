/**
 * Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self/description/
 * Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:
Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
 */

/*Solution*/
var productExceptSelf = function(nums) {
  let result = [];

  //Store the left half
  result.push(1);
  for (let i = 1; i < nums.length; i++) {
    result.push(result[i - 1] * nums[i - 1]);
  }

  //Get product of left half (already stored in result) * right half
  let productOfRightHalf = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] = productOfRightHalf * result[j];
    productOfRightHalf = productOfRightHalf * nums[j];
  }

  return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 * 需要注意是原数组改动 所以需要快慢指针
 */
var removeDuplicates = function (nums) {
  let last = null;
  let count = 0;
  let j = 0;
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    if (last === nums[i]) {
      continue;
    }
    last = nums[i];
    nums[j] = nums[i];
    j++;
    count++;
  }
  return count;
};

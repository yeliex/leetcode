/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 将遍历过的数字push到map以避免遍历2次, 遍历到的数字与target的差值如果在map中存在,则匹配
 */
const twoSum = function (nums, target) {
  const map = {};
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const complement = target - nums[i];
    // map[complement] === 0时, 判断不会成立, 所以要与undefined比较
    if (map[complement] !== undefined && map[complement] !== i) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
};

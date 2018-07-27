/**
 * @param {string} s
 * @return {number}
 * 考虑2种边界情况:
 * 1. 单字母
 * 2. ohvhjdml (字母在中间)
 */
var lengthOfLongestSubstring = function (s) {
  const map = {};
  let max = 0;
  const length = s.length;
  let i = 0;

  for (let j = 0; j < length; j++) {
    const c = s[j];

    if (map[c] !== undefined) {
      i = Math.max(map[c], i);
    }
    max = Math.max(max, j - i + 1);
    map[c] = j + 1;
  }

  return max;
};

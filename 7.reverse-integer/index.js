/**
 * @param {string} x
 * @return {number}
 */
var reverse = function (x) {
  let cache = 0;

  const isNegative = x < 0;

  x = (isNegative ? -x : x).toString(10);

  const l = x.length;

  for (let i = l - 1; i >= 0; i--) {
    const c = x[i];
    cache = cache * 10 + Number(c);
  }

  if (cache > (Math.pow(2, 31) - 1)) {
    return 0;
  }

  return isNegative ? -cache : cache;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 1. 合并数组求中位数, 时间O(nlogn)
 * 2. 归并排序, 合并的时候排序数组 时间 O(mn)
 * 3. 递归法,二分查找,逐步排除掉不可能出现中位数的区间 O(logn)
 * 如果数组a的中位数小于数组b的中位数，那么整体的中位数只可能出现在a的右区间加上b的左区间之中；
 * 如果数组a的中位数大于等于数组b的中位数，那么整体的中位数只可能出现在a的左区间加上b的右区间之中
 * 利用分治的思想逐渐缩小a的区间和b的区间来找到中位数
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  const total = m + n;
  const half = total >> 1;

  const halfPlus = findKth(nums1, m, nums2, n, half + 1);

  if (total & 1) {
    return halfPlus;
  }
  return ((findKth(nums1, m, nums2, n, half)) + halfPlus) / 2;
};

function findKth(a, m, b, n, k) {
  // 始终保证m<=n
  if (m > n) {
    return findKth(b, n, a, m, k);
  }
  // m===0, 只需要计算b的中位数
  if (m === 0) {
    return b[k - 1];
  }
  if (k === 1) {
    return Math.min(a[0], b[0]);
  }

  // 将k分割成2部分
  const ka = Math.min(k >> 1, m);
  const kb = k - ka;

  if (a[ka - 1] < b[kb - 1]) {
    return findKth(a.slice(ka), m - ka, b, n, k - ka);
  }
  else if (a[ka - 1] > b[kb - 1]) {
    return findKth(a, m, b.slice(kb), n - kb, k - kb);
  }
  else {
    return a[ka - 1];
  }
}

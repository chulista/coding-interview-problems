/**
 * Problem description:
 * Partition a set into two subsets such that the difference of subset sums is
 * minimum.
 */
function findMinimumDiff(arr, remaining, accrued, size, maxSize) {
  if (size + 1 <= maxSize) {
    remaining.forEach((n, index) => {
      const cloneArr = remaining.slice();
      cloneArr.splice(index, 1);
      findMinimumDiff([...arr, n], cloneArr, accrued + n, size + 1, maxSize);
    });
  }
  if (arr.length > 0) {
    min = Math.min(
      Math.abs(accrued - remaining.reduce((a, b) => a + b, 0)), min
    );
  }
  var min = Infinity;
  findMinimumDiff([], A, 0, 1, A.length - 1);
  console.log('r/', min);
  return min;
}

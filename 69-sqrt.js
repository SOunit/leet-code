/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;

  let num;
  let pivot,
    left = 2,
    right = x / 2;

  while (left <= right) {
    pivot = left + (right - left) / 2;
    num = pivot * pivot;

    if (num > x) {
      right = pivot - 1;
    } else if (num < x) {
      left = pivot + 1;
    } else {
      return pivot;
    }
  }

  return right;
};

console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(0));

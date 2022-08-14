/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let digitsLength = digits.length;

  // move from right to left
  for (let i = digitsLength - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }

  return [1, ...digits];
};

console.log(plusOne([1, 2, 3, 4]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

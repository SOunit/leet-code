// ref
// Leet Code 70. Climbing Stairs [Java] | Two best approaches
// https://www.youtube.com/watch?v=d1MY2dQXuss

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 0 || n === 1 || n === 2) {
    return n;
  }

  let current = 0;
  let prev1 = 2;
  let prev2 = 1;

  for (let i = 3; i <= n; i++) {
    current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return current;
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(0));

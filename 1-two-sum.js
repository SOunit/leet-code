/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    numsMap[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const numToFind = target - nums[i];
    if (numsMap[numToFind] && numsMap[numToFind] !== i) {
      return [i, numsMap[numToFind]];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

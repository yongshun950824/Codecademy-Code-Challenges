function getX(x, nums) {
  // Write your code here
  if (nums.length == 0)
    return 0;

  if (x > nums.length)
    return 0;

  nums.sort((a, b) => a - b);

  return nums[x - 1];
}

console.log(getX(2, [5, 10, -3, -3, 7, 9]));

// Leave this so we can test your code:
module.exports = getX;

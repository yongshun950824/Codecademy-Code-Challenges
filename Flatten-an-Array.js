function flattenArray(array) {
  // Write your code here
  return array.reduce(function (acc, cur) {
    if (Array.isArray(cur)) {
      acc = acc.concat(cur);
    } else {
      acc.push(cur);
    }

    return acc;
  }, []);
}

console.log(flattenArray([1, 2, [3, 4, 5], 6, [7, 8], 9]))

// Leave this so we can test your code:
module.exports = flattenArray;

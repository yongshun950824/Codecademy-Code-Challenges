function productOfTheOthers(array) {
  // Write your code here
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let multiply = 1;
    for (let j = 0; j < array.length; j++) {
      if (i != j)
        multiply *= array[j];
    }

    result.push(multiply);
  }

  return result;
}
console.log(productOfTheOthers([1, 2, 3, 4, 5]))

// Leave this so we can test your code:
module.exports = productOfTheOthers;

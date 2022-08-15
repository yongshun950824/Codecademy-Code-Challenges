function missingNos(array, k) {
  let missingValues = [];
  let temp = array[0];
  while (missingValues.length < k) {

   if (!array.includes(temp))
    missingValues.push(temp); 

    temp++;
  }

  return missingValues;
}

const testArray = [1, 2, 4, 5, 6, 7, 8, 10];
console.log(missingNos(testArray, 2));

// Leave this so we can test your code:
module.exports = missingNos;

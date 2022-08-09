function statsFinder(array) {
  // Write your code here
  var sum = 0;
  var mode = array[0];
  var obj = {};

  for (var item of array)
  {
    if (!(item in obj))
    {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }

    if (obj[item] > obj[mode])
      mode = item;

    sum += item;
  }

  var mean = sum / array.length;

  return [mean, mode];
}

console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]))

// Leave this so we can test your code:
module.exports = statsFinder;

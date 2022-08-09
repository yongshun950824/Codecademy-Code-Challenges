function primeFinder(n) {
  // Write your code here
  var result = [];
  for (var i = 2; i <= n; i++) {
    if (isPrime(i))
      result.push(i);
  }
  return result;
}

function isPrime(n) {
  if (n == 1)
    return false;
  else if (n == 2
      || n == 3)
    return true;
  else {
    for (var i = 2, s = Math.sqrt(n); i <= s; i++)
    {
      if (n % i == 0)
        return false;
    }

    return true;
  }
}

console.log(primeFinder(11))

// Leave this so we can test your code:
module.exports = primeFinder;

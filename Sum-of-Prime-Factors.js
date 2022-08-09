function sumOfPrimeFactors(n) {
  var sumOfPrimeFactors = 0;

  for (let i = 2; i <= n; i++)
  {
    if (isPrime(i) 
      && n % i == 0)
      sumOfPrimeFactors += i;
  }

  return sumOfPrimeFactors;
}

function isPrime(n) {
  if (n <= 1)
    return false;
  else if (n == 2
    || n == 3)
    return true;
  else {
    for (var i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i == 0)
        return false;
    }

    return true;
  }
}

// Leave this so we can test your code:
module.exports = sumOfPrimeFactors;

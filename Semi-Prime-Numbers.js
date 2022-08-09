function semiPrimeCount(n) {
  let count = 0;
  let primeNums = [];

  // Push prime numbers
  for (let i = 2; i < n; i++) {
    if (isPrimeNumber(i))
      primeNums.push(i);
  }

  for (let i = 4; i < n; i++) {

    for (let prime of primeNums) {
      let divided = i / prime;

      // 1. Divided by prime number returns 0 remainder
      // 2. Divided by prime number returns prime number
      if (i % prime == 0
        && isPrimeNumber(divided)) {
        count++;
        break;
      }
    }
  }

  return count;
}

function isPrimeNumber(n) {
  if (n < 2)
    return false;
  else if (n == 2
    || n == 3)
    return true;
  else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0)
        return false;
    }
  }

  return true;
}

semiPrimeCount(10);

// Leave this so we can test your code:
module.exports = semiPrimeCount;

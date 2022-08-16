function fibFinder(n) {
  // Write your code here
  if (n == 0 || n == 1)
    return n;

  return fibFinder(n - 1) + fibFinder(n - 2);
}

console.log(fibFinder(6))

// Leave this so that we can test your code:
module.exports = fibFinder;

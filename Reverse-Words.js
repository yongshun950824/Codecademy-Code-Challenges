function wordReverser(phrase) {
  // Write your code here
  if (!phrase)
    return phrase;

  let words = phrase.split(' ');

  for (let i = 0; i < words.length / 2; i++) {
    let temp = words[i];
    words[i] = words[words.length - 1 - i];
    words[words.length - 1 - i] = temp;
  }

  return words.join(" ");
}

console.log(wordReverser("Codecademy rules"));

// Leave this so we can test your code:
module.exports = wordReverser;

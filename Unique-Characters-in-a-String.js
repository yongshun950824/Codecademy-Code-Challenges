function uniqueCharacters(stringIn) {
  if (stringIn == "")
    return "Cannot be an empty string";

  let array = [];

  for (let char of stringIn) {
    if (array.findIndex(x => x == char) > -1) {
      return false;
    }

    array.push(char);
  }

  return true;
}

// Leave this so we can test your code:
module.exports = uniqueCharacters;

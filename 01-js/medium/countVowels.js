/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  str = str.toLowerCase()
  str = str.replace(' ', '')
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (findvowels(str[i])) result++;
  }

  return result;

}

function findvowels(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === char) {
      return true
    }
  }
  return false
}


module.exports = countVowels;
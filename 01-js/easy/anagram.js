/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.replace(' ', '')
  str2 = str2.replace(' ', '')
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  if (str1.length !== str2.length) return false
  let str1_char = [...str1]
  let str2_char = [...str2]

  str1_char.sort()
  str2_char.sort()

  for (let i = 0; i < str2_char.length; i++) {
    if (str1_char[i] !== str2_char[i]) {
      return false
    }
  }

  return true
}

module.exports = isAnagram;

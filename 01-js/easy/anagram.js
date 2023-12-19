/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    if(str1.length!=str2.length)
      return false;

    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    str1=str1.split("").sort();
    str2=str2.split("").sort();

    let i=0;
    while(i<str1.length)
    { 
      if(str1[i]==str2[i])
       i++;
      else
       return false;
    }
    return true;
}


module.exports = isAnagram;

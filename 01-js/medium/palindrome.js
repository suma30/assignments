/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g,"");
  let str2=str.split("").reverse().join("");
  if(str===str2)
   return true;
  else
  return false;
}

module.exports = isPalindrome;

/* 
  For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
  Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
*/

function gcdOfStrings(str1: string, str2: string): string {
  for (let size = str2.length; size !== 0; size--) {
    let multiplier2 = str1.length / size,  multiplier1 = str2.length / size;
    let x = str2.slice(0, size)  

    if (str1 === x.repeat(multiplier2) && x.repeat(multiplier1) === str2) {
      return x
    } 
  }
  
  return ''
};
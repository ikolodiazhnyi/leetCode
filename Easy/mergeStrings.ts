/* 
  You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
  Return the merged string.
*/

function mergeAlternately(word1: string, word2: string): string {
  let res: string[] = [];

  let i = 0;
  while (i < word1.length || i < word2.length) {
    res = [...res, word1[i]];
    res = [...res, word2[i]];
    i++;
  }
  return res.join("");
}

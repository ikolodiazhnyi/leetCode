

/* 
  Write a function to find the longest common prefix string amongst an array of strings.
  If there is no common prefix, return an empty string "".
*/

function longestCommonPrefix(strs: string[]): string {
  let firstStr = strs[0];

  for (let i = 0; i < firstStr.length; i++) {
    if (!strs.every((str) => str[i] === firstStr[i])) {
      return firstStr.slice(0, i);
    }
  }
  return firstStr;
}


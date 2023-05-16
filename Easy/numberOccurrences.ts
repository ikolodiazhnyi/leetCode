/* 
  Unique Number of Occurrences
  Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
*/

function uniqueOccurrences(arr: number[]): boolean {
  let obj = {};

  arr.forEach((n) => {
    if (n in obj) {
      obj[n] += 1;
    } else {
      obj[n] = 1;
    }
  });

  return Object.values(obj).length === [...new Set(Object.values(obj))].length;
}

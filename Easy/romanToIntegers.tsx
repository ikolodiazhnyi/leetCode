/* 
  Input: s = "III";
  Output: 3;
  Explanation: III = 3;
*/

function romanToInt(s: string): number {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const integers: number[] = Array.from(s).map((ch) => roman[ch]);

  return integers.reduce(
    (acc, n, i) => (n < integers[i + 1] ? acc - n : acc + n),
    0
  );
}

module.exports = romanToInt;

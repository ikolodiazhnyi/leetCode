/* 
  Given two binary strings a and b, return their sum as a binary string.
*/

function addBinary(a: string, b: string): string {
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
}

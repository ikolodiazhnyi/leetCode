function isPalindrome(x: number): boolean {
  let arrX = Array.from(String(x));
  let arrXR = Array.from(String(x)).reverse();

  return arrX.join("") === arrXR.join("");
}

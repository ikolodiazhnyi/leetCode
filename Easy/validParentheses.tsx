/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

const isOpening = (ch: string): number => {
  const opening = ["(", "{", "["];

  return opening.indexOf(ch);
};

const brackets = {
  "}": "{",
  "]": "[",
  ")": "(",
};

function isValid(s: string): boolean {
  let opening:string[] = [];

  for (let i = 0; i < s.length; i++) {
    let currentElem = s[i];

    if (isOpening(currentElem) >= 0) {
      opening = [...opening, s[i]];
    } else if (opening.pop() !== brackets[currentElem]) {
      return false;
    }
  }

  return !opening.length;
}

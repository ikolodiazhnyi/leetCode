const isOpening = (ch: string): boolean => {
  const opening = "({[";
  return opening.includes(ch);
};

const isClosing = (ch: string): boolean => {
  const closing = ")]}";
  return closing.includes(ch);
};

function isValid(s: string): boolean {
  let i = 0;
  while (i < s.length) {
    if (isOpening(s[i]) && isClosing(s[i + 1])) {
      i += 2;
    } else {
      console.log(i);
      return false;
    }
  }
  return true;
}

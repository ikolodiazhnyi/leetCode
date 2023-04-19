const isOpening = (ch: string): number => {
  const opening = ["(", "{", "["];

  return opening.indexOf(ch);
};

const isCertainClosing = (ch: string, i: number): boolean => {
  const closing = [")", "}", "]"];

  return ch === closing[i];
};

function isValid(s: string): boolean {
  let i = 0;

  while (i < s.length) {
    const nextCh = s[i + 1];
    const openingIndex = isOpening(s[i]);

    if (openingIndex >= 0 && isCertainClosing(nextCh, openingIndex)) {
      i += 2;
      continue;
    }
    return false;
  }
  return true;
}

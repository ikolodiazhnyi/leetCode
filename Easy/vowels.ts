/* 
  Given a string s, reverse only all the vowels in the string and return it.
  The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
*/

function reverseVowels(s: string): string {
  const vowels = "aeiouAEIOU";
  let res = "";

  let fVowels = Array.from(s).filter((a) => vowels.includes(a));
  fVowels = fVowels.reverse();

  for (let i = 0, fi = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      res += fVowels[fi];
      fi++;
    } else {
      res += s[i];
    }
  }

  return res;
}

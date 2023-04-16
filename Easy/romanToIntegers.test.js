const romanToInt = require("./romanToIntegers");

const cases = [
  ["III", 3],
  ["LVIII", 58],
  ["MCMXCIV", 1994],
];

describe("translate roman numbers to integers", () => {
  test.each(cases)(
    "given %p as argument, returns %p",
    (firstArg, expectedResult) => {
      const result = romanToInt(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});

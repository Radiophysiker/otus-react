import { firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

describe("firstPrioritiesCalc simple cases", () => {
  it("[2, * 32]", () => {
    expect(firstPrioritiesCalc([2, "*", 32])).toEqual([64]);
  });

  it("[2 * 32 / 4]", () => {
    expect(firstPrioritiesCalc([2, "*", 32, "/", 4])).toEqual([16]);
  });

  it("[2 * 8 * 4]", () => {
    expect(firstPrioritiesCalc([2, "*", 8, "*", 4])).toEqual([64]);
  });

  it("[2 * 32 / 4 + 5]", () => {
    expect(firstPrioritiesCalc([2, "*", 32, "/", 4, "+", 5])).toEqual([16, "+", 5]);
  });

  it("[2 + 2 * 2]", () => {
    expect(firstPrioritiesCalc([2, "+", 2, "*", 2])).toEqual([2, "+", 4]);
  });
});

describe("secondPrioritiesCalc simple cases", () => {
  it("[1, + 32]", () => {
    expect(secondPrioritiesCalc([1, "+", 32])).toEqual(33);
  });

  it("[1, + 32, -4]", () => {
    expect(secondPrioritiesCalc([1, "+", 32, "-", 4])).toEqual(29);
  });
});

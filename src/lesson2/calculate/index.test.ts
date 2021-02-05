import { calculate } from "./index";

describe("calculate simple cases", () => {
  test.each([
    ["1 * 32", 32],
    ["2 * 32", 64],
    ["2 + 32", 34],
  ])("calculate(%p) = %p", (a, b) => {
    expect(calculate(a)).toEqual(b);
  });
});

describe("calculate tripled/mixed cases", () => {
  test.each([
    ["2 * 2 * 3", 12],
    ["2 * 2 + 3", 7],
    ["2 + 2 * 3", 8],
  ])("calculate(%p) = %p", (a, b) => {
    expect(calculate(a)).toEqual(b);
  });
});

describe("calculate long cases", () => {
  test.each([
    ["20 + 1 * 10 - 5 * 3", 15],
    ["20 - 10 * 10 / 5 - 3", -3],
    ["2 + 2 * 3", 8],
  ])("calculate(%p) = %p", (a, b) => {
    expect(calculate(a)).toEqual(b);
  });
});

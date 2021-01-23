import { parser } from "./parser";

describe("Simple test", () => {
  it("simple add: 1 + 1", () => {
    expect(parser("1 + 1")).toEqual([1, "+", 1]);
  });

  it("add and multiple: 2 + 2 * 2", () => {
    expect(parser("2 + 2 * 2")).toEqual([2, "+", 2, "*", 2]);
  });
});

describe("Parser invalid cases", () => {
  it("1 + + 33 - 2", () => {
    expect(() => parser("1 + + 33 - 2")).toThrow(TypeError("Unexpected string"));
  });

  it("1 | 33 - 2", () => {
    expect(() => parser("1 | 33 - 2")).toThrow(TypeError("Unexpected string"));
  });
});

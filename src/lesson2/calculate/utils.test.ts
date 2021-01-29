import { isNumber } from "./utils";

describe("Positive isNumber cases", () => {
  it("Simple number", () => {
    expect(isNumber(1)).toEqual(true);
  });

  it("Simple number in string", () => {
    expect(isNumber("1")).toEqual(true);
  });

  it("Float number in string", () => {
    expect(isNumber("0.1")).toEqual(true);
  });
});

describe("Negative isNumber cases", () => {
  it("Simple string", () => {
    expect(isNumber("sdw")).toEqual(false);
  });

  it("Simple string and number", () => {
    expect(isNumber("sd1")).toEqual(false);
  });

  it("Simple number and string", () => {
    expect(isNumber("1sd")).toEqual(false);
  });

  it("a string like a number", () => {
    expect(isNumber("1.1.1")).toEqual(false);
  });
});


const { addition, subtraction, multiply } = require("../calc");

describe("Calculator", () => {
  describe("Addition function", () => {
    test("should return 42 for 20 + 22", () => {
      expect(addition(20, 22)).toBe(42);
    });

    test("Should return 73 for 42 + 31", () => {
      expect(addition(42, 31)).toBe(73);
    });

    test("Should return 0 for no parameters", () => {
      expect(addition()).toBe(0);
    });

    test("Should return 0 for missing parameters", () => {
      expect(addition()).toBe(0);
    });

    test("Should return 43 for '42'+ 1 for one string parameter", () => {
      expect(addition("42", 1)).toBe(43);
    });

    test("Should return 52 for '42'+ '10' for two string parameters", () => {
      expect(addition('42','10')).toBe(52);
    });
  });

  describe("Subtraction function", () => {
    test("should return 2 for 22 - 20", () => {
      expect(subtraction(22, 20)).toBe(2);
    });

    test("Should return 10 for 20 - 10", () => {
      expect(subtraction(20, 10)).toBe(10);
    });

    test("Should return 0 for no parameters", () => {
      expect(subtraction()).toBe(0);
    });

    test("Should return 0 for missing parameters", () => {
      expect(subtraction()).toBe(0);
    });

    test("Should return 41 for '42'- 1 for one string parameter", () => {
      expect(subtraction("42", 1)).toBe(41);
    });

    test("Should return 2 for '42' - '40' for two string parameters", () => {
      expect(subtraction("42", "40")).toBe(2);
    });
  });

  describe("Multiply function", () => {
       test("should return 3 for 3 * 3", () => {
         expect(multiply(3, 3)).toBe(9);
       });

       test("Should return 4 for 2 * 2", () => {
         expect(multiply(2, 2)).toBe(4);
       });

       test("Should return 0 for no parameters", () => {
         expect(multiply()).toBe(0);
       });

       test("Should return 0 for missing parameters", () => {
         expect(multiply()).toBe(0);
       });

       test("Should return 16 for '4'* 4 for one string parameter", () => {
         expect(multiply("4", 4)).toBe(16);
       });

       test("Should return 25 for '5' * '5' for two string parameters", () => {
         expect(multiply("5", "5")).toBe(25);
       });
  });

  // describe("Divide function", () => {});
});

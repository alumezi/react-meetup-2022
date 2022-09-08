import { randomNumber } from "add-two-numbers-package";
import { addThreeNumbers } from ".";

jest.mock("add-two-numbers-package", () => {
  return {
    randomNumber: () => 20,
  };
});

test("It adds x with y", () => {
  const testVarOne = 2;
  const testVarTwo = 3;
  const result = addThreeNumbers(testVarOne, testVarTwo);
  expect(result).toBe(testVarOne + testVarTwo + 20);
});

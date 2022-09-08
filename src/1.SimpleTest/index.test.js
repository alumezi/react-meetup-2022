import { addTwoNumbers } from ".";

test("It adds x with y", () => {
  const testVarOne = 2;
  const testVarTwo = 3;
  const result = addTwoNumbers(testVarOne, testVarTwo);

  expect(result).toBe(testVarOne + testVarTwo);
});

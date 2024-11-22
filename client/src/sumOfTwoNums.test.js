import sumOfTwoNums from "./sumOfTwoNums";
import { expect, test } from "vitest";

test("test sumOfTwoNums function", () => {
  expect(sumOfTwoNums(1, 2)).toBe(3);
});

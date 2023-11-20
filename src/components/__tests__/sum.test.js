import { Sum } from "../Sum";

test("Sum of 2 nums", () => {
  const result = Sum(3, 4);
  expect(result).toBe(7);
});

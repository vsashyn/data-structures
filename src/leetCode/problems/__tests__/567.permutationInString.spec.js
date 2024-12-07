import { checkInclusion } from "../567.permutationInString";

test("checkInclusion", () => {
  expect(checkInclusion("dc", "abcd")).toBe(true);
  expect(checkInclusion("dc", "adcd")).toBe(true);
  expect(checkInclusion("dd", "adcd")).toBe(false);
  expect(checkInclusion("ab", "cd")).toBe(false);
});

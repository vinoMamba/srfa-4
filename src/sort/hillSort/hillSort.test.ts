import { test, expect } from "vitest";
import { hillSort } from "./hillSort";

test("hillSort", () => {
  console.log(hillSort([1, 2, 4, 5, 3]));
  expect(hillSort([1, 2, 4, 3, 5])).toEqual([1, 2, 3, 4, 5]);
});

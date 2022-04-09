import { test, expect } from "vitest";
import { insertSort } from "./insertSort";

test("insertSort", () => {
  expect(insertSort([2, 1, 1, 4, 5])).toEqual([1, 1, 2, 4, 5]);
});

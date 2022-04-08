import {less} from "../less";
import {expect, test} from "vitest";


test("less", () => {
    expect(less(1, 2)).toEqual(true);
    expect(less(1, 1)).toEqual(false);
    expect(less(2, 1)).toEqual(false);
});
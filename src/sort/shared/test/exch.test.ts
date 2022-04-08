import {expect, test} from "vitest";
import {exch} from "../exch";

test('exch', () => {
    expect(exch([1, 2, 3, 4], 2, 1)).toEqual([1, 3, 2, 4]);
    expect(exch([1], 0, 0)).toEqual([1]);
    expect(exch([1], 1, 0)).toEqual([1]);
})
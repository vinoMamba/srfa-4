import {selectionSort} from "./selectionSort";
import {expect, test} from "vitest";


test('selectionSort', () => {
    expect(selectionSort([2, 1, 3, 4, 6, 5, 32])).toEqual([1, 2, 3, 4, 5, 6, 32]);
    expect(selectionSort([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(selectionSort([1, 1, 1, 2, 1, 333, 22, 1])).toEqual([1, 1, 1, 1, 1, 2, 22, 333]);
    expect(selectionSort([-1, 2, -10])).toEqual([-10, -1, 2]);
});

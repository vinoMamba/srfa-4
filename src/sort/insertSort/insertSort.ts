import { exch } from "../shared/exch";
import { less } from "../shared/less";

export function insertSort(array: number[]): number[] {
  const n = array.length;
  for (let i = 1; i < n; i++) {
    for (let j = i; j > 0 && less(array[j], array[j - 1]); j--) {
      exch(array, j, j - 1);
    }
  }
  return array;
}

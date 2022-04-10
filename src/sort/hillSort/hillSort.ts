import { exch } from "../shared/exch";
import { less } from "../shared/less";

export function hillSort(arr: number[]): number[] {
  const n = arr.length;
  let h = 4;
  while (h >= 1) {
    for (let i = h; i < n; i++) {
      for (let j = i; j >= h && less(arr[j], arr[j - h]); j -= h) {
        exch(arr, j, j - h);
      }
    }
    h = Math.floor(h / 2);
  }
  return arr;
}

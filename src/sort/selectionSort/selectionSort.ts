import {less} from "../shared/less";
import {exch} from "../shared/exch";

export function selectionSort(array: number[]): number[] {
    const n = array.length;
    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (less(array[j], array[min])) {
                min = j;
                exch(array, i, min);
            }
        }
    }
    return array
}
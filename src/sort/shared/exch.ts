export function exch(array: number[], i: number, j: number): number[] {
    if (i >= array.length || j >= array.length) {
        return array
    }
    const swap = array[i];
    array[i] = array[j];
    array[j] = swap;
    return array;
}
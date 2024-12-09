import { deepStrictEqual as equal } from "node:assert";

export function findClosestEl(arr, n) {
    let bad = -1;
    let good = arr.length;

    if (arr[arr.length - 1] < n) {
        return arr[arr.length - 1];
    }
    if (arr[0] > n) {
        return arr[0];
    }

    while (good - bad > 1) {
        let mid = Math.floor((good + bad) / 2);
        if (arr[mid] >= n) {
            good = mid;
        } else {
            bad = mid;
        }
    }
    return Math.abs(arr[good] - n) <= Math.abs(arr[bad] - n)
        ? arr[good]
        : arr[bad];
}

equal(findClosestEl([1, 2, 3, 4, 5], 2), 2);
equal(findClosestEl([1, 2, 3, 4, 5], 7), 5);
equal(findClosestEl([1, 2, 4, 5], 3), 4);
equal(findClosestEl([1, 4, 5], 2), 1);
equal(findClosestEl([1, 4, 5], -2), 1);

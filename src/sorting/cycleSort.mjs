import { deepStrictEqual as equal } from "node:assert";

/**
 * In-place sort for elements 1...N **with no duplicates**.
 * Iterate through entire array, check if element is in current index.
 * If yes - move to next element.
 * If element is greater then array length - ignore it (check task specification)
 * If element is not equal to index - swap it to correct position
 */
function cycleSortFor1ToN(arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] !== i && arr[i] < arr.length) {
            swap(arr, arr[i], i);
        } else {
            i++;
        }
    }
    return arr;
}

function swap(arr, i1, i2) {
    let tmp = arr[i2];
    arr[i2] = arr[i1];
    arr[i1] = tmp;
}

/* equal(cycleSortFor1ToN([2, 3, 1, 1, 100, 99]), [1, 1, 2, 3, 99, 100]); */
equal(cycleSortFor1ToN([2, 3, 1, 0]), [0, 1, 2, 3]);

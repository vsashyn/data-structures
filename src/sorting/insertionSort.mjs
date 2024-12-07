import { deepStrictEqual as equal } from 'node:assert'

/**
 * Insertion sort
 * Assume that first element is already sorted.
 * Start from second element, compare it with prev element and swap if needed.
 * Continue for all elements in array.
 *
 * "Idempotence should be cheap" - if array is sorted, should be no sorting aplied.
 * Insertion sort is used when number of elements is small.
 * It can also be useful when the input array is almost sorted, and only a few elements
 * are misplaced in a complete big array.
 *
 * Used in JKD with threshold 14
 * https://github.com/openjdk/jdk/blob/418bb42b95b177f5f31f756054d0dd83740c6686/src/java.desktop/share/classes/sun/java2d/marlin/MergeSort.java#L120
 *
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
function insertionSort(arr) {
    let tmp
    for (let i = 1; i < arr.length; i++) {
        let k = i
        let j = i - 1
        while (j >= 0 && arr[j] > arr[k]) {
            tmp = arr[j]
            arr[j] = arr[k]
            arr[k] = tmp
            j--
            k--
        }
    }
    return arr
}

equal(insertionSort([5, 0, -15, 100, 3]), [-15, 0, 3, 5, 100])
equal(insertionSort([0]), [0])
equal(insertionSort([]), [])

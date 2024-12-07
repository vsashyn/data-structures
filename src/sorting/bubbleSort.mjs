import { deepStrictEqual as equal } from 'node:assert'

/**
 * Classic bubble sort. After 1st iteration the biggest element is in the correct place.
 * This algorithm can be improved by square root idea.
 */
function bubbleSort(arr) {
    let t
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                t = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = t
            }
        }
    }
    return arr
}

equal(bubbleSort([9, 3, 6, 2, 0, 7, 4]), [0, 2, 3, 4, 6, 7, 9])
equal(bubbleSort([1, 2, 3]), [1, 2, 3])

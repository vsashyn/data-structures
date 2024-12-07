import { deepStrictEqual as equal } from 'node:assert'

/**
 * Selection sort
 *
 * We have sorted and unsorted parts.
 * On every iteration we find min value in unsorted part of array and place it as
 * first element of unsorted part.
 *
 * Find min is bottleneck. Heap sort is the solution for it.
 *
 *
 * Time complexity: O(n^2)
 */
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minInd = findMinInd(arr, i)
        let tmp = arr[i]
        arr[i] = arr[minInd]
        arr[minInd] = tmp
    }
    return arr
}

function findMinInd(arr, start) {
    let minInd = start
    for (let i = start; i < arr.length; i++) {
        if (arr[minInd] > arr[i]) {
            minInd = i
        }
    }
    return minInd
}

equal(selectionSort([100, -3, 0, 4, -17]), [-17, -3, 0, 4, 100])
equal(selectionSort([100]), [100])
equal(selectionSort([100]), [100])
equal(selectionSort([100, -3, 1]), [-3, 1, 100])

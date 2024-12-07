import { deepStrictEqual } from 'node:assert'

/**
 * Find max subarray with sum less then passed
 */
function goodSum(arr, S) {
    let l = 0, r = 0
    let sum = 0
    let maxL = -1
    while (r < arr.length) {
        // do
        sum += arr[r]
        // while not good
        while (sum > S) {
            // remove
            sum = sum - arr[l]
            l++
        }
        maxL = Math.max(maxL, r - l + 1)
        r++
    }
    return maxL
}
deepStrictEqual(goodSum([1, 2, 3, 4, 5], 4), 2)
deepStrictEqual(goodSum([10, 1, 1, 1, 1], 4), 4)
deepStrictEqual(goodSum([10, 1, 2, 3, 4, 1, 1, 1, 100], 15), 7)
deepStrictEqual(goodSum([100], 15), 0)

/**
 * test task: Number of smaller
 * For every bi find elements where ai < bi
 */
function numberOfSmaller(a, b) {
    a.sort((a, b) => a - b)
    b.sort((a, b) => a - b)
    let result = []

    let l = 0, r = 0
    while (l < a.length || r < b.length) {
        if (r === b.length || (l < a.length && a[l] < b[r])) {
            l++
        } else {
            result[r] = l
            r++
        }
    }
    return result
}

deepStrictEqual(numberOfSmaller([1, 2, 3, 4, 5, 6], [3, 7]), [2, 6])
deepStrictEqual(numberOfSmaller([6, 7, 8], [3, 2]), [0, 0])
deepStrictEqual(numberOfSmaller([2], [3, 4]), [1, 1])

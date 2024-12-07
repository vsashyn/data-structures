import { deepStrictEqual as equal } from 'node:assert'

/**
 * Find subarray which sum is greater then arg
 * with least amount of elements
 */
function goodSum2(arr, S) {
    let l = 0, r = 0
    let sum = 0
    let minL = Number.MAX_SAFE_INTEGER

    while (r < arr.length) {
        sum += arr[r]
        while (S <= sum - arr[l]) {
            sum -= arr[l]
            l++
        }
        if (S <= sum) {
            minL = Math.min(minL, r - l + 1)
        }
        r++
    }
    if (minL !== Number.MAX_SAFE_INTEGER) {
        return minL
    } else {
        return -1
    }
}
equal(goodSum2([1, 2, 3, 4, 5], 4), 1)
equal(goodSum2([1, 1, 1, 5], 5), 1)
equal(goodSum2([1, 1, 1, 1], 5), -1)
equal(goodSum2([1, 1, 1, 1], 4), 4)
equal(goodSum2([5], 10), -1)
equal(goodSum2([5], 5), 1)

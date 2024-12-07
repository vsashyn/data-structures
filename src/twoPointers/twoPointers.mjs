import { deepStrictEqual as equal } from 'node:assert'

/**
 * Find amount of subarrays where sum doesn't exeed passed sum
 */
function goodSum(arr, S) {
    let l = 0
    let sum = 0
    let amount = 0
    for (let r = 0; r < arr.length; r++) {
        sum += arr[r]
        while (sum > S) {
            sum -= arr[l]
            l++
        }
        amount += r - l + 1
        r++
    }
    return amount
}
equal(goodSum([100, 1], 2), 1)
equal(goodSum([1, 2, 3, 4, 5], 100), 15)

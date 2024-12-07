import { deepStrictEqual as equal } from 'node:assert'

/**
 * Works if numbers inside are from 0 and not too big.
 */
function countingSort(nums) {
    const max = Math.max(...nums)
    const arr = Array.from({ length: max + 1 }).fill(0)
    for (let i = 0; i < nums.length; i++) {
        arr[nums[i]]++
    }
    let result = []
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] !== 0) {
            result.push(i)
            arr[i]--
        }
    }
    return result
}

equal(countingSort([3, 2, 0, 2, 5, 10]), [0, 2, 2, 3, 5, 10])

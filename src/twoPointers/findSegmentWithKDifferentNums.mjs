import { deepStrictEqual as equal } from 'node:assert'

/**
 * Find segment with max length on which there are no more then
 * k different nums
 */
function findSegmentWithKDifferentNums(arr, k) {
    let l = 0
    let maxL = 0
    let cnt = new Array(10000).fill(0)
    let distinct = 0

    for (let r = 0; r < arr.length; r++) {
        let el = arr[r]
        cnt[el]++
        if (cnt[el] === 1) {
            distinct++
        }
        while (distinct > k) {
            cnt[arr[l]] = cnt[arr[l]] - 1
            if (cnt[arr[l]] < 1) {
                distinct--
            }
            l++
        }
        maxL = Math.max(maxL, r - l + 1)
    }
    return maxL
}

equal(findSegmentWithKDifferentNums([1, 1, 1], 1), 3)
equal(findSegmentWithKDifferentNums([1, 2, 3, 4, 5], 3), 3)
equal(findSegmentWithKDifferentNums([1, 1, 1, 1, 1], 3), 5)
equal(findSegmentWithKDifferentNums([1, 1, 1, 1, 1], 3), 5)

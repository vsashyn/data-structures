import { deepStrictEqual as equal } from 'node:assert'

// find first 1 ind
// 0 0 0 0 0 0 1 1 1 1 1
function binarySearch(arr, el) {
    let bad = -1
    let good = arr.length
    while (good - bad > 1) {
        let m = Math.floor((good + bad) / 2)
        if (arr[m] >= el) {
            good = m
        } else {
            bad = m
        }
    }
    return good
}

equal(binarySearch([0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], 1), 6)
equal(binarySearch([0, 0], 1), 2)
equal(binarySearch([1, 1], 1), 0)

function binarySearchReturnLast(arr, el) {
    let good = arr.length
    let bad = -1
    // 0 0 1 1 1
    while (good - bad > 1) {
        let m = Math.floor((good + bad) / 2)
        if (arr[m] > el) {
            good = m
        } else {
            bad = m
        }
    }
    return bad
}
equal(binarySearchReturnLast([0, 0, 1, 1, 1], 0), 1)
equal(binarySearchReturnLast([0, 1, 2, 2, 2], 2), 4)
equal(binarySearchReturnLast([0, 1, 2, 2, 2], 2), 4)

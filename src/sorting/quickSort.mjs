import { deepStrictEqual as equal } from 'node:assert'
/**
 * Divide and conquer.
 *  1. Select pivot. In this example - low element. Can be random.
 *  2. Do partition. Hardest part. Hoare's partition is better then Lomuto.
 *  3. Run quickSort on 2 sub arrays
 */

function quickSort(arr) {
    qsort(arr, 0, arr.length - 1)
}

function qsort(arr, lower, upper) {
    /**
     * Without tail call optimization
     */
    if (lower >= upper) {
        return
    }
    let pIndex = partition(arr, lower, upper)
    qsort(arr, lower, pIndex)
    qsort(arr, pIndex + 1, upper)
}
/**
 * Hoare's partition
 * @returns
 */
function partition(arr, lower, upper) {
    let pivot = arr[lower]
    let i = lower - 1
    let j = upper + 1

    while (true) {
        do {
            i++
        } while (arr[i] < pivot) // first will be pivot

        do {
            j--
        } while (arr[j] > pivot)

        if (i >= j) {
            return j // pivot position
        }
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}
let a = [3, -1, 2, 4, 5, 0]
quickSort(a)
equal(a, [-1, 0, 2, 3, 4, 5])
let b = [3, 2, 1, 3, 2, 0]
quickSort(b)
equal(b, [0, 1, 2, 2, 3, 3])
let c = [0, 0, 0, 0]
quickSort(c)
equal(c, [0, 0, 0, 0])

export function stressTest() {
    for (let i = 0; i < 10000; i++) {
        let a = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000))
        let b = [...a]
        a.sort((a, b) => a - b)
        quickSort(b)
        equal(b, a)
    }
}
// stressTest();

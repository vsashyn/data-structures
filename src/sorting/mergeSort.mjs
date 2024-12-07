import { deepStrictEqual as equal } from 'node:assert'

/**
 * Merge sort
 * "easy split, hard join"
 * Divide and conquer. First, divide task to more trivial tasks. Second, solve trivial task.
 * Merge sort works on concept that 2 parts of array are sorted and we use linear approach
 * to merge them into single sorted array.
 * Time complexity: n*log(n)
 */
function mergeSort(arr) {
    sort(arr, 0, arr.length)
}

function sort(arr, l, r) {
    if (r - l < 2) {
        return
    }
    let m = Math.floor((r + l) / 2)
    sort(arr, l, m)
    sort(arr, m, r)
    merge(arr, l, m, r)
}

// We have 2 sorted parts of array.
// Let's create aux array, copy left sorted part in it.
// Then move 3 pointers (one for in-place array and 2 for halfs)
// to update main array with real values from aux or right part.
function merge(arr, l, m, r) {
    let aux = []
    // create aux for left part of the array
    // which allows to use only +half additional memory
    for (let i = l; i < m; i++) {
        aux.push(arr[i])
    }
    let k = l // main array
    let i = 0 // aux
    let j = m // second half
    while (i < aux.length || j < r) {
        if ((arr[j] > aux[i] && i < aux.length) || j === r) {
            arr[k] = aux[i]
            i++
            k++
        } else {
            arr[k] = arr[j]
            j++
            k++
        }
    }
}

let a1 = [4, 3, 1]
mergeSort(a1)
equal(a1, [1, 3, 4])

let a2 = [4, 3, 1, 5, 6, 7]
mergeSort(a2)
equal(a2, [1, 3, 4, 5, 6, 7])

let a3 = [0, -5, 54, 100]
mergeSort(a3)
equal(a3, [-5, 0, 54, 100])

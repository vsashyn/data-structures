import { deepStrictEqual as equal } from 'node:assert'

function binSearch(arr, k) {
    let good = arr.length
    let bad = -1
    while (good - bad > 1) {
        let m = Math.floor((good + bad) / 2)
        if (arr[m] >= k) {
            good = m
        } else {
            bad = m
        }
    }
    return good
}
equal(binSearch([1, 2, 3, 4, 4, 5], 4), 3)
equal(binSearch([1, 2, 3, 4, 4, 5], 7), 6)

/**
 * Git bisect implementation
 */
function bisect(arr) {
    let good = arr.length
    let bad = -1

    while (good - bad > 1) {
        let m = Math.floor((good + bad) / 2)
        if (goodEnough(arr[m])) {
            good = m
        } else {
            bad = m
        }
    }
    return good
}
let goodEnough = e => e > 10
equal(bisect([1, 2, 3, 11, 12, 13]), 3)

/**
 * Graduate system.
 * Return grade
 * 60 < F
 * 60 <= D < 70
 * 70 <= C < 80
 * 80 <= B < 90
 * 90 <= A <= 100
 */
function getGrade(grade) {
    let arr = [60, 70, 80, 90, 100]

    let grades = {
        0: 'F',
        1: 'D',
        2: 'C',
        3: 'B',
        4: 'A',
    }
    let good = arr.length
    let bad = -1
    while (good - bad > 1) {
        let m = Math.floor((good + bad) / 2)
        // який має бути предикат?
        if (arr[m] > grade) {
            good = m
        } else {
            bad = m
        }
    }
    return grades[good]
}
equal(getGrade(75), 'C')
equal(getGrade(70), 'C')
equal(getGrade(91), 'A')
equal(getGrade(50), 'F')
equal(getGrade(88), 'B')

/**
 * Return monsters with different difficulty with different probability.
 * Tesla
 */
export function monsterSample() {
    // 1,2,3 - weight probability
    const weight = [1, 2, 3]
    // generate fake [1,2,2,3,3,3] can be space-consuming
    // instead, we can use prefix sum
    // [0 - 1)
    // [1 - 3)
    // [3 - 6)
    let sum = 0
    let prefixSum = []
    for (let i = 0; i < weight.length; i++) {
        sum = sum + weight[i]
        prefixSum[i] = sum
    }
    // generate random hero
    let random = Math.floor(Math.random() * (5 - 0)) + 0
    let good = prefixSum.length
    let bad = -1
    while (good - bad > 1) {
        let m = Math.floor((good + bad) / 2)
        if (prefixSum[m] > random) {
            good = m
        } else {
            bad = m
        }
    }
    // console.log('random:', random, 'chose:', good)
    return good
}

// Where is the last number < x?
// 2 3 3 3 6 8 8 9
// 0 1 1 1 0 0 0
function binSearch3(arr, k) {
    let good = arr.length
    let bad = -1
    while (good - bad > 1) {
        let m = Math.floor((good + bad) / 2)
        if (arr[m] >= k) {
            good = m
        } else {
            bad = m
        }
    }
    return bad
}
equal(binSearch3([2, 3, 3, 3, 6, 8, 8, 9], 6), 3)

function minDeskSize(a, b, n) {
    function good_enough(x) {
        return Math.floor((x / a)) * Math.floor((x / b)) >= n
    }
    let bad = 0
    let good = Math.max(a, b) * n
    while (good - bad > 1) {
        let m = Math.floor((good + bad) / 2)
        if (good_enough(m)) {
            good = m
        } else {
            bad = m
        }
    }
    return good
}
equal(minDeskSize(3, 4, 3), 8)
// 9, 12
// 2 *

function sqrt(n) {
    let good = n
    let bad = 1

    while (good - bad > 1) {
        let m = Math.floor((good + bad) / 2)
        if (m * m >= n) {
            good = m
        } else {
            bad = m
        }
    }
    return good
}

equal(sqrt(4), 2)
equal(sqrt(121), 11)
equal(sqrt(1), 1)

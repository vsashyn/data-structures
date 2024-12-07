import { deepStrictEqual as equal } from 'node:assert'

/**
 * List of all subsets
 */
function listSubsets(str) {
    let result = []
    function recursiveSubset(str, rest) {
        if (rest === '') {
            result.push(str)
            return str
        } else {
            recursiveSubset(str + rest[0], rest.slice(1))
            recursiveSubset(str, rest.slice(1))
        }
    }
    recursiveSubset('', str)
    return result
}
equal(listSubsets('abs'), ['abs', 'ab', 'as',
    'a', 'bs', 'b',
    's', ''])

/**
 * Permutations: k!
 */
function listPermutations(s) {
    const res = []
    function recPermute(soFar, rest) {
        if (soFar.length === s.length) {
            res.push(soFar)
            return
        }
        for (let i = 0; i < rest.length; i++) {
            let next = soFar + rest[i]
            let remaining = rest.slice(0, i) + rest.slice(i + 1)
            recPermute(next, remaining)
        }
    }
    recPermute('', s)
    return res
}
equal(listPermutations('abc'), ['abc',
    'acb',
    'bac',
    'bca',
    'cab',
    'cba'])

/**
 * List of vectors
 */
function binaryVector(s) {
    const res = []
    function binV(soFar, str) {
        if (soFar.length >= str.length) {
            res.push(soFar)
            return
        }
        for (let i = 0; i < str.length; i++) {
            binV(soFar + str[i], str)
        }
    }
    binV('', s)
    return res
}
equal(binaryVector('01'), ['00', '01', '10', '11'])

function listCombinations(arr, n) {
    const results = []
    function combinations(soFar, rest, n) {
        if (soFar.length === n) {
            results.push(soFar)
            return soFar
        }
        for (let i = 0; i < rest.length; i++) {
            if (!soFar.includes(rest[i])) {
                combinations([...soFar, rest[i]], rest, n)
            }
        }
    }
    combinations([], arr, n)
    return results
}
equal(listCombinations([1, 2, 3], 2), [[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]])

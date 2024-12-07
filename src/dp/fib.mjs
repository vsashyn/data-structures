import { deepStrictEqual as equal } from 'node:assert'

function fib(n) {
    if (n < 2) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}

/**
 * Memoization
 */
function memoizationFibonacci() {
    const cache = {
        0: 0,
        1: 1,
    }
    return function (p) {
        if (typeof cache[p] !== 'undefined') {
            return cache[p]
        }
        cache[p] = fibMemo(p - 1) + fibMemo(p - 2)
        return cache[p]
    }
}

const fibMemo = memoizationFibonacci(fib)
equal(fibMemo(10), 55)

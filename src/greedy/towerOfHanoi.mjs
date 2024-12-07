import { deepStrictEqual as equal } from 'node:assert'

export function fibonacci(n) {
    if (n <= 1) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
equal(fibonacci(4), 3)
equal(fibonacci(10), 55)
equal(fibonacci(0), 0)

export function factorial(n) {
    if (n <= 1) {
        return n
    }
    return n * factorial(n - 1)
}
equal(factorial(3), 6)
equal(factorial(4), 24)
equal(factorial(0), 0)

/**
 * Solves the Tower of Hanoi problem.
 *
 * @param {number} n - The number of disks.
 * @param {string} _from - The name of the source rod.
 * @param {string} _to - The name of the destination rod.
 */
export function hanoi(n, _from, _to) {
    if (n > 0) {
        hanoi(n - 1, _from, 6 - _from - _to)
        console.log('move: ', _from, _to)
        hanoi(n - 1, 6 - _from - _to, _to)
    }
}
hanoi(3, 1, 3)

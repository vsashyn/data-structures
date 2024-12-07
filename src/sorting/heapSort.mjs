import { deepStrictEqual as equal } from 'node:assert'

/**
 * Heap
 * Children: 2i, 2i+1
 * Parent: i // 2
 * Time complexity:
 * Insert: logn
 * Extract min: logn
 * Remove random element: n*logn (can be improved)
 *
 *
 * TODO: heapify
 * Heapify can be done in O(n) using siftDown() for range (n/2, 1)
 */
export function heap() {
    let _arr = [Number.MIN_SAFE_INTEGER]

    /**
     * Use in adding element
     * Time complexity: O(logn)
     */
    function siftUp(i) {
        while (i > 1 && _arr[i] < _arr[Math.floor(i / 2)]) {
            let tmp = _arr[Math.floor(i / 2)]
            _arr[Math.floor(i / 2)] = _arr[i]
            _arr[i] = tmp
            i = Math.floor(i / 2)
        }
    }

    /**
     * use after extracting root element
     * Time complexity: O(logn)
     */
    function siftDown(i) {
        while (2 * i < _arr.length) {
            let j = i
            if (_arr[2 * i] < _arr[i]) {
                j = 2 * i
            }
            if (2 * i + 1 < _arr.length - 1 && _arr[2 * i + 1] < _arr[j]) {
                j = 2 * i + 1
            }
            if (j === i) {
                break
            }
            let tmp = _arr[i]
            _arr[i] = _arr[j]
            _arr[j] = tmp
            i = j
        }
    }
    // add element. use siftUp inside
    function insert(el) {
        _arr.push(el)
        let i = _arr.length - 1
        siftUp(i)
    }

    function extractMin() {
        let el = _arr[1]
        let last = _arr.pop()
        if (_arr.length < 2) {
            return el
        } else {
            _arr[1] = last
            siftDown(1)
            return el
        }
    }
    /**
     * Removing random element
     * Time complexity: O(n)
     */
    function remove(el) {
        let i = _arr.findIndex(e => e === el)
        if (i === -1) {
            throw new Error('Element not found')
        }
        if (_arr.length < 2 || i === _arr.length - 1) {
            _arr.pop()
            return
        } else {
            let last = _arr.pop()
            _arr[i] = last
            // use siftUp or siftDow, depending on parent
            if (i > 1 && _arr[i] < _arr[Math.floor(i / 2)]) {
                siftUp(i)
            } else {
                siftDown(i)
            }
        }
    }

    function heapify(arr) {
        for (let i = 0; i < arr.length; i++) {
            _arr.push(arr[i])
        }
        for (let i = Math.floor(_arr.length / 2); i > 0; i--) {
            siftDown(i)
        }
    }

    function getMin() {
        return _arr[1]
    }

    return {
        extractMin,
        insert,
        _arr,
        remove,
        getMin,
        heapify,
    }
}

let minheap = heap()
minheap.insert(3)
minheap.insert(-10)
minheap.insert(0)
equal(minheap.extractMin(), -10)
equal(minheap._arr, [Number.MIN_SAFE_INTEGER, 0, 3])
equal(minheap.extractMin(), 0)
equal(minheap.extractMin(), 3)
equal(minheap._arr, [Number.MIN_SAFE_INTEGER])
minheap.insert(-19)
minheap.remove(-19)
equal(minheap._arr, [Number.MIN_SAFE_INTEGER])
minheap.insert(0)
minheap.insert(100)
minheap.insert(-5)
equal(minheap.getMin(), -5)
equal(minheap.remove(-5), undefined)
equal(minheap.extractMin(), 0)
equal(minheap.extractMin(), 100)
equal(minheap._arr, [Number.MIN_SAFE_INTEGER])
minheap.heapify([5, 0, -10, 100, 3])
equal(minheap._arr, [-9007199254740991, -10, 0, 5, 100, 3])
equal(minheap.extractMin(), -10)
equal(minheap.extractMin(), 0)
equal(minheap.extractMin(), 3)
equal(minheap.extractMin(), 5)
equal(minheap.extractMin(), 100)
equal(minheap._arr, [Number.MIN_SAFE_INTEGER])

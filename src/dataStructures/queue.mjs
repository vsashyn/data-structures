import { deepStrictEqual as equal } from 'node:assert'

/**
 * Fast Queue implementation based on
 * circular buffer which is connected end-to-end.
 */
class Queue {
    constructor() {
        this.items = []
        this.capacity = 10
        this.count = 0
        this.head = 0
        this.tail = 0
    }

    enqueue(i) {
        this.items[this.tail] = i
        this.count++
        this.tail = (this.tail + 1) % this.capacity
    }

    dequeue() {
        let el = this.items[this.head]
        this.items[this.head] = null
        this.head = (this.head + 1) % this.capacity
        this.count--
        return el
    }

    /**
     * Reserves new capacity for queue. Use 1.5 as a hardcoded multiplicator.
     */
    reserve() {
        let newItems = []
        for (let i = 0; i < this.count; i++) {
            newItems[i] = this.items[(this.head + i) % this.capacity]
        }
        this.capacity = this.capacity * 1.5
        this.items = newItems
        this.head = 0
        this.tail = this.count
    }

    size() {
        if (this.tail > this.head) {
            return this.tail - this.head
        } else {
            return this.capacity - this.head + this.tail
        }
    }
}

const q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
equal(q.dequeue(), 1)
equal(q.dequeue(), 2)
q.enqueue(6)
q.enqueue(6)
equal(q.dequeue(), 3)
q.enqueue(6)
q.enqueue(6)
q.enqueue(6)
q.enqueue(6)
q.enqueue(7)
q.enqueue(7)
equal(q.items, [
    7, null, null, 6, 6,
    6, 6, 6, 6, 7,
])
equal(q.dequeue(), 6)
equal(q.dequeue(), 6)
equal(q.size(), 6)
q.reserve()
equal(q.items, [6, 6, 6, 6, 7, 7])
for (let i = 0; i < 7; i++) {
    q.enqueue(i)
}
equal(q.items, [6, 6, 6, 6, 7, 7, 0, 1, 2, 3, 4, 5, 6])

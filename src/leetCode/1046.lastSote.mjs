/**
 * @param {number[]} stones
 * @return {number}
 */
export const lastStoneWeight = function (stones) {
    const queue = new PriorityQueue({
        compare: (e1, e2) => {
            return e2 - e1;
        },
    });
    for (let i = 0; i < stones.length; i++) {
        queue.enqueue(stones[i]);
    }
    while (queue.size() > 1) {
        const el1 = queue.dequeue();
        const el2 = queue.dequeue();
        let res = Math.abs(el1 - el2);
        if (res !== 0) {
            queue.enqueue(res);
        }
    }
    return queue.size() > 0 ? queue.enqueue() : 0;
};

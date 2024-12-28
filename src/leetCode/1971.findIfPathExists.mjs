import { deepStrictEqual as equal } from "node:assert";

var validPath = function (n, edges, source, destination) {
    // BFS
    if (source === destination) return true;
    const list = {};
    for (let [v1, v2] of edges) {
        list[v1] = list[v1] || [];
        list[v2] = list[v2] || [];
        list[v1].push(v2);
        list[v2].push(v1);
    }
    const queue = list[source] || [];
    const visited = new Set(queue);

    while (queue.length > 0) {
        const v = queue.shift();
        if (v === destination) {
            return true;
        }
        for (let node of list[v]) {
            if (visited.has(node)) {
                continue;
            }
            visited.add(node);
            queue.push(node);
        }
    }
    return false;
};
equal(
    validPath(
        3,
        [
            [0, 1],
            [1, 2],
            [2, 0],
        ],
        0,
        2
    ),
    true
);

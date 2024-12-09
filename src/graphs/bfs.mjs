/**
 * Breath first search.
 * Useful for:
 *  1.Find shortest path for
 *
 * Time complexity: O(V+E)
 */

export function bfs(graph, start, target) {
    const queue = graph[start];
    const visited = Set();
    const distance = [];
    distance[start] = 0;
    while (queue.length > 0) {
        const el = queue.shift();

        for (let child of el) {
            if (visited.has(child)) {
                continue;
            }
            if (child === target) {
                return true;
            }
            visited.add(el);
            distance[child] = distance[el] + 1;
            queue.push(child);
        }
    }
    return false;
}

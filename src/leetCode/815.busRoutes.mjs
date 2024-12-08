import { deepStrictEqual as equal } from "node:assert";

export function busRoutes(routes, source, target) {
    if (source === target) {
        return 0;
    }
    // Build adjacency list
    // Each top maps to list of buses
    const graph = {};
    for (let i = 0; i < routes.length; i++) {
        for (let j = 0; j < routes[i].length; j++) {
            if (Array.isArray(graph[routes[i][j]])) {
                graph[routes[i][j]].push(i);
            } else {
                graph[routes[i][j]] = [i];
            }
        }
    }
    // Use BFS
    if (!graph[source] || !graph[target]) {
        return -1;
    }
    const queue = [...graph[source]]; // queue saved bus numbers
    const visBuses = new Set(); // Set to track which buses we already visited
    const distance = {};
    for (let _b of graph[source]) {
        distance[_b] = 1;
        visBuses.add(_b);
    }
    while (queue.length > 0) {
        let b = queue.shift(); // first bus
        for (let i = 0; i < routes[b].length; i++) {
            // iterate over stops
            if (routes[b][i] === target) {
                // we found a stop
                return distance[b];
            }

            let buses = graph[routes[b][i]]; // what other buses are available
            // add buses that wasn't processed
            for (let bb of buses) {
                if (visBuses.has(bb)) {
                    continue;
                }
                visBuses.add(bb);
                distance[bb] = distance[b] + 1;
                queue.push(bb);
            }
        }
    }
    return -1;
}

equal(busRoutes([[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]], 15, 12), -1);

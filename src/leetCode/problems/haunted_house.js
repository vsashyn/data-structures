import { deepStrictEqual as equal } from "node:assert";
// 6 people are to go with

const input = [
    [1, 2],
    [1, 4],
    [0, 3],
    [0, 1],
    [3, 4],
    [0, 2],
];
function hauntedHouse(people) {
    people.sort((a, b) => a[0] - b[0]);
    let matrix = Array.from({ length: people.length }, () =>
        Array.from({ length: people.length })
    );
    for (let i = 0; i < people.length; i++) {
        for (let j = 0; j < people.length; j++) {
            matrix[i][j] = j >= people[i][0] && j <= people[i][1] ? 1 : 0;
        }
    }
    let M = 0;

    for (let i = 0; i < people.length; i++) {
        let rowCount = 0;
        for (let j = 0; j < people.length; j++) {
            rowCount += matrix[j][i];
        }
        M = Math.max(M, Math.min(rowCount, i));
    }
    return M;
}
function parseArgs(input) {
    const args = input.split("\n");
    const people = [];
    for (let i = 1; i < args.length; i++) {
        people.push(args[i].split(" ").map((e) => Number(e)));
    }
    console.log(hauntedHouse(people));
}

equal(hauntedHouse(input), 3);
/*
n       0 1 2 3 4 5 6 
[0, 3]  1 1 1 1 0 0 0
[0, 1]  1 1 0 0 0 0 0
[0, 2]  1 1 1 0 0 0 0
[1, 2]  0 1 1 0 0 0 0
[1, 4]  0 1 1 1 1 0 0
[3, 4]  0 0 0 1 1 0 0
*/

import { deepStrictEqual as equal } from "node:assert";

class UnionFind {
    constructor(size) {
        this.parent = Array.from({ length: size }, (_, i) => {
            return i;
        });
    }
    find(i) {
        if (i === this.parent[i]) {
            return i;
        }
        return this.find(this.parent[i]);
    }
    unite(i, j) {
        const ii = this.find(i);
        const ij = this.find(j);
        this.parent[ii] = ij;
    }
}
const uf = new UnionFind(5);
uf.unite(1, 2);
uf.unite(3, 4);
equal(uf.find(1), 2);

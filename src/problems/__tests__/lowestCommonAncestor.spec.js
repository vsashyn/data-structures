import { LCA, Node } from "../lowestCommonAncestor";
// A tree
const a = new Node("a", null);
const b = new Node("b", a);
const c = new Node("c", a);
const z = new Node("z", b);
const w = new Node("w", b);
const e = new Node("e", c);
const d = new Node("d", c);
const k = new Node("k", d);
const j = new Node("j", d);
test("lowestCommonAncestor", () => {
  expect(LCA(a, b).value).toBe("a");
  expect(LCA(k, e).value).toBe("c");
  expect(LCA(z, d).value).toBe("a");
});

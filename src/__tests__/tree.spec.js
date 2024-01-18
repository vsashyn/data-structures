const BinaryTree = require("../tree").BinaryTree;

describe("BinaryTree", () => {
  let binaryTree;

  beforeEach(() => {
    binaryTree = new BinaryTree();
  });

  it("should add a node to the binary tree", () => {
    binaryTree.addNode(5);
    expect(binaryTree.root.value).toBe(5);
    expect(binaryTree.root.left).toBeNull();
    expect(binaryTree.root.right).toBeNull();
  });

  it("should not allow adding duplicate nodes", () => {
    binaryTree.addNode(5);
    expect(() => binaryTree.addNode(5)).toThrowError(
      "No duplicates can be added"
    );
  });

  it("removeNode should throw 'Node not found'", () => {
    const tree = new BinaryTree();
    tree.addNode(5);
    expect(() => tree.removeNode(-1)).toThrowError("Node not found");
  });

  it("to JSON", () => {
    const tree = new BinaryTree();
    tree.addNode(5);
    tree.addNode(3);
    tree.addNode(10);
    tree.addNode(11);
    tree.addNode(7);
    tree.addNode(1);
    expect(tree.root.toJSON()).toEqual({
      value: 5,
      children: [
        {
          value: 3,
          children: [{ value: 1, children: [null, null] }, null],
        },
        {
          value: 10,
          children: [
            { value: 7, children: [null, null] },
            { value: 11, children: [null, null] },
          ],
        },
      ],
    });
  });

  it("supports removing node with 1 child", () => {
    const tree = new BinaryTree();
    tree.addNode(5);
    tree.addNode(3);
    tree.addNode(7);
    tree.addNode(4);
    tree.addNode(10);
    tree.addNode(8);
    tree.removeNode(3);
    expect(tree.root.toJSON()).toEqual({
      value: 5,
      children: [
        { value: 4, children: [null, null] },
        {
          value: 7,
          children: [
            null,
            {
              value: 10,
              children: [{ value: 8, children: [null, null] }, null],
            },
          ],
        },
      ],
    });
  });
  
  it("supports removing node with 2 children", () => {
    const tree = new BinaryTree();
    tree.addNode(5);
    tree.addNode(3);
    tree.addNode(7);
    tree.addNode(4);
    tree.addNode(10);
    tree.addNode(8);
    tree.addNode(1);
    tree.removeNode(3);
    expect(tree.root.toJSON()).toEqual({
      value: 5,
      children: [
        { value: 4, children: [{value: 1, children: [null, null]}, null] },
        {
          value: 7,
          children: [
            null,
            {
              value: 10,
              children: [{ value: 8, children: [null, null] }, null],
            },
          ],
        },
      ],
    });
  });

  it("supports removing leaf", () => {
    const tree = new BinaryTree();
    tree.addNode(5);
    tree.addNode(3);
    tree.addNode(7);
    tree.addNode(4);
    tree.addNode(10);
    tree.addNode(8);

    // removing left leaf
    tree.removeNode(8);
    // removing right leaf
    tree.removeNode(4);
    expect(tree.root.toJSON()).toEqual({
      value: 5,
      children: [
        { value: 3, children: [null, null] },
        {
          value: 7,
          children: [null, { value: 10, children: [null, null] }],
        },
      ],
    });
  });

  it("removeNode support removing root", () => {
    const tree = new BinaryTree();
    tree.addNode(5);
    tree.addNode(3);
    tree.addNode(7);
    tree.addNode(4);
    tree.addNode(10);
    tree.addNode(8);

    tree.removeNode(5);
    expect(tree.root.toJSON()).toEqual({
      value: 7,
      children: [
        { value: 3, children: [null, { value: 4, children: [null, null] }] },
        { value: 10, children: [{ value: 8, children: [null, null] }, null] },
      ],
    });
  });
});

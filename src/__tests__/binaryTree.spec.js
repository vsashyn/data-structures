const BinaryTree = require("../binaryTree").BinaryTree;

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
    binaryTree.addNode(5);
    expect(() => binaryTree.removeNode(-1)).toThrowError("Node not found");
  });

  it("to JSON", () => {
    binaryTree.addNode(5);
    binaryTree.addNode(3);
    binaryTree.addNode(10);
    binaryTree.addNode(11);
    binaryTree.addNode(7);
    binaryTree.addNode(1);
    expect(binaryTree.root.toJSON()).toEqual({
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
    binaryTree.addNode(5);
    binaryTree.addNode(3);
    binaryTree.addNode(7);
    binaryTree.addNode(4);
    binaryTree.addNode(10);
    binaryTree.addNode(8);
    binaryTree.removeNode(3);
    expect(binaryTree.root.toJSON()).toEqual({
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
    binaryTree.addNode(5);
    binaryTree.addNode(3);
    binaryTree.addNode(7);
    binaryTree.addNode(4);
    binaryTree.addNode(10);
    binaryTree.addNode(8);
    binaryTree.addNode(1);
    binaryTree.removeNode(3);
    expect(binaryTree.root.toJSON()).toEqual({
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
    binaryTree.addNode(5);
    binaryTree.addNode(3);
    binaryTree.addNode(7);
    binaryTree.addNode(4);
    binaryTree.addNode(10);
    binaryTree.addNode(8);

    // removing left leaf
    binaryTree.removeNode(8);
    // removing right leaf
    binaryTree.removeNode(4);
    expect(binaryTree.root.toJSON()).toEqual({
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
    binaryTree.addNode(5);
    binaryTree.addNode(3);
    binaryTree.addNode(7);
    binaryTree.addNode(4);
    binaryTree.addNode(10);
    binaryTree.addNode(8);

    binaryTree.removeNode(5);
    expect(binaryTree.root.toJSON()).toEqual({
      value: 7,
      children: [
        { value: 3, children: [null, { value: 4, children: [null, null] }] },
        { value: 10, children: [{ value: 8, children: [null, null] }, null] },
      ],
    });
  });
});

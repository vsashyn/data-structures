import { ListNode, addTwoNumbers, createLinkedList } from "../addTwoNumbers";

describe("addTwoNumbers", () => {
  it("should return the sum of two linked lists 1", () => {
    // Test Case 1
    let l1 = new ListNode(2);
    l1.next = new ListNode(4);
    l1.next.next = new ListNode(3);
    // 2 -> 4 -> 3
    let l2 = new ListNode(5);
    l2.next = new ListNode(6);
    l2.next.next = new ListNode(4);
    // 5 -> 6 -> 4
    let result = addTwoNumbers(l1, l2);
    expect(result.val).toBe(7);
    expect(result.next.val).toBe(0);
    expect(result.next.next.val).toBe(8);
    expect(result.next.next.next).toBeNull();

    // Test Case 2
    l1 = new ListNode(0);

    l2 = new ListNode(0);

    result = addTwoNumbers(l1, l2);
    expect(result.val).toBe(0);
    expect(result.next).toBeNull();
  });
  it("should return the sum of two linked lists 2", () => {
    let l1 = new ListNode(9);
    l1.next = new ListNode(9);
    l1.next.next = new ListNode(9);
    let l2 = new ListNode(1);
    let result = addTwoNumbers(l1, l2);
    expect(result.val).toBe(0);
    expect(result.next.val).toBe(0);
    expect(result.next.next.val).toBe(0);
    expect(result.next.next.next.val).toBe(1);
    expect(result.next.next.next.next).toBeNull();
  });
  it("should return the sum of two linked lists 3", () => {
    const l1 = createLinkedList([
      "1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
    ]);
    const l2 = createLinkedList(["4", "6", "5"]);
    const expected = createLinkedList([
      "5",
      "6",
      "5",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
    ]);
    const result = addTwoNumbers(l1, l2);
    expect(result).toEqual(expected);
  });
});

describe("getNode", () => {
  test("1", () => {
    expect(createLinkedList(["1", "2", "3"]).val).toBe(1);
    expect(createLinkedList(["1", "2", "3"]).next.val).toBe(2);
    expect(createLinkedList(["1", "2", "3"]).next.next.val).toBe(3);
  });
});

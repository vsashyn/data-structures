import { ListNode, addTwoNumbers, getList } from "../addTwoNumbersWorstSolutionEver";


describe("addTwoNumbers", () => {
  it("should return the sum of two linked lists", () => {
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

    // Test Case 3
    l1 = new ListNode(9);
    l1.next = new ListNode(9);
    l1.next.next = new ListNode(9);

    l2 = new ListNode(1);

    result = addTwoNumbers(l1, l2);
    expect(result.val).toBe(0);
    expect(result.next.val).toBe(0);
    expect(result.next.next.val).toBe(0);
    expect(result.next.next.next.val).toBe(1);
    expect(result.next.next.next.next).toBeNull();
  });
  it('should return a linked list that represents the sum of two input linked lists', () => {
    const l1 = getList(1000000000000000000000000000001n);
    const l2 = getList(465);
    const expected = getList(1000000000000000000000000000466n);
    const result = addTwoNumbers(l1, l2);
    expect(result).toEqual(expected);
  });
});

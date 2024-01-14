const LinkedList = require('../data-structures').LinkedList;

test('asdf', () => {
  expect('a').toBe('a')
})



describe('LinkedList', () => {
  it('1', () => {
    const l = new LinkedList();
    l.push('1111')
    l.push('222')
    l.push('333')
    
    expect(l.pop().value).toBe('333')

    expect(l.get(0).value).toBe('1111')
    expect(l.get(2).value).toBe('222')

  })
})

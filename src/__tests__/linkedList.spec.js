import { LinkedList} from '../linkedList.js'

describe('LinkedList', () => {
  it('should support pop() and get()', () => {
    const l = new LinkedList();
    l.push('1111')
    l.push('222')
    l.push('333')
    
    expect(l.pop().value).toBe('333')

    expect(l.get(0).value).toBe('1111')
    expect(l.get(2).value).toBe('222')
  })
})

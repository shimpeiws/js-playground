import { Record, List } from 'immutable'
import assert from "assert"

describe('Blank Filter', function () {
  it('return blank List', () => {
    const list = List.of(1, 2, 3)
    const result = list.filter((_item) => {
      return false
    })
    assert.equal(result, new List())
  })
})

describe('Concat Lists', function () {
  it('return blank List', () => {
    const list1 = new List()
    const list2 = new List()
    const list3 = new List()
    assert.equal(list1.concat(list2).concat(list3), new List())
  })
})

import { Record, List, Map } from 'immutable'

export default class Data {

  constructor(id, name) {
    this.id = id
    this.name = name
  }

  isEqual(_targetItem) {
    return false
  }

  isMatchedText(_searchText) {
    return false
  }

  refName() {
    return ''
  }

  matchedByText(text, searchText) {
    const regexp = new RegExp(`(.*?)${searchText.toLowerCase()}(.*?)`)
    return text.toLowerCase().search(regexp) !== -1
  }
}

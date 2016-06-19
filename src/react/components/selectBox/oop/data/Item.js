import Data from './Data'

export default class Item extends Data {
  constructor(item) {
    super(item.id, item.name)
    this.original = item
  }

  isEqual(targetItem) {
    return this.id === targetItem.id
  }

  isMatchedText(searchText) {
    return this.matchedByText(this.name, searchText)
  }

  refName() {
    return `item_${this.id}`
  }
}

import Data from './Data'

export default class Company extends Data {
  constructor(item) {
    super(item.id, item.companyName)
    this.country = item.country
    this.original = item
  }

  isEqual(targetItem) {
    return this.id === targetItem.id
  }

  isMatchedText(searchText) {
    return this.matchedByText(this.name, searchText)
  }

  refName() {
    return `company_${this.id}`
  }
}

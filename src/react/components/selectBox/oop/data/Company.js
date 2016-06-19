import Data from './Data'

export default class Company extends Data {
  isEqual(targetItem) {
    return this.id === targetItem.id
  }

  isMatchedText(searchText) {
    return this.matchedByText(this.companyName, searchText)
  }

  refName() {
    return `company_${this.id}`
  }
}

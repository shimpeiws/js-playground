import React from 'react'

import CompanyRow from './../views/CompanyRow'
import SelectBoxStrategy from './SelectBoxStrategy'
import CompanyData from './../data/Company'

export default class ProjectStrategy extends SelectBoxStrategy {
  canMultipleSelect() {
    return true
  }

  toItemData(item) {
    return new CompanyData(item)
  }

  toOriginalData(item) {
    return item.original
  }

  renderItem(selectBox, item) {
    const selected = selectBox.isSelectedItem(item)
    return (
      <CompanyRow
        key={item.id}
        name={item.name}
        selected={selected}
        onClick={this.onClickItem.bind(selectBox, item)}
      />
    )
  }
}

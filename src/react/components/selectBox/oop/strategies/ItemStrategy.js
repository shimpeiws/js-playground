import React from 'react'

import ItemRow from './../views/ItemRow'
import SelectBoxStrategy from './SelectBoxStrategy'
import ItemData from './../data/Item'

export default class ProjectStrategy extends SelectBoxStrategy {
  canMultipleSelect() {
    return false
  }

  toItemData(item) {
    return new ItemData(item)
  }

  toOriginalData(item) {
    return item.original
  }

  renderItem(selectBox, item) {
    const selected = selectBox.isSelectedItem(item)
    return (
      <ItemRow
        key={item.id}
        name={item.name}
        selected={selected}
        onClick={this.onClickItem.bind(this, selectBox, item)}
      />
    )
  }
}

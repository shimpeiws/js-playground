import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import { List } from 'immutable'

import SelectBox from './SelectBox'
import styles from './SelectBox.scss'

class ItemSelectBox extends SelectBox {
  onChange(items) {
    this.props.onSelectItem(items)
  }

  displayName(item) {
    return item.name
  }

  displayExtra(item) {
    return null
  }
}

export default CSSModules(ItemSelectBox, styles)

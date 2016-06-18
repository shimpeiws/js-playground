import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import { List } from 'immutable'

import SelectBox from './SelectBox'
import styles from './SelectBox.scss'

class ItemSelectBox extends SelectBox {
  onChange(items) {
    console.log("ItemSelectBox", ItemSelectBox)
    this.props.onSelectItem(items)
  }
}

export default CSSModules(ItemSelectBox, styles)

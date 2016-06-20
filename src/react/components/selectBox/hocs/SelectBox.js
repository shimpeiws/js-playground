import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import { List } from 'immutable'

import styles from './SelectBox.scss'

class SelectBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibleItems: this.props.items,
    }
  }

  onClickItem(item) {
    let resItems = this.props.selectedItems || new List()
    const isRemoving = this.isSelectedItem(item)

    if (isRemoving) {
      resItems = resItems.delete(
        resItems.findIndex((resItem) => {
          return resItem.id === item.id
        })
      )
    } else {
      if (this.state.canMultipleSelect) {
        resItems = resItems.push(item)
      } else {
        resItems = List.of(item)
      }
    }

    this.props.onSelectItem(items)
  }

  isSelectedItem(item) {
    return this.props.selectedItems.includes(item)
  }

  onClick(item) {
    let resItems = this.props.selectedItems || new List()
    const isRemoving = this.isSelectedItem(item)

    if (isRemoving) {
      resItems = resItems.delete(
        resItems.findIndex((resItem) => {
          return resItem.id === item.id
        })
      )
    } else {
      if (this.props.canMultipleSelect()) {
        resItems = resItems.push(item)
      } else {
        resItems = List.of(item)
      }
    }

    this.props.onSelectItem(resItems)
  }

  render() {
    return(
      <div styleName="base">
        <div styleName="list-wrapper">
          <ul styleName="list">
            {
              this.props.renderHeader()
            }
            {
              this.state.visibleItems.map((item) => {
                return this.props.renderRow(this, item, this.isSelectedItem(item))
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default CSSModules(SelectBox, styles)

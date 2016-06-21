import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import { List } from 'immutable'

import styles from './SelectBox.scss'


class SelectBox extends Component {
  static contextTypes = {
    renderRow: React.PropTypes.any,
    canMultipleSelect: React.PropTypes.any,
  }

  constructor(props) {
    super(props)
    this.state = {
      visibleItems: this.props.items,
    }
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
      if (this.context.canMultipleSelect()) {
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
              this.props.items.map((item) => {
                return this.context.renderRow(
                  item,
                  this.isSelectedItem(item),
                  this.onClick.bind(this)
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default CSSModules(SelectBox, styles)

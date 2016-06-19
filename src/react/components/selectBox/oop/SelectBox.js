import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import { List } from 'immutable'

import styles from './SelectBox.scss'

class SelectBox extends Component {
  constructor(props) {
    super(props)

    this.state = this.props.strategy.getInitialState()
  }

  selectedItems() {
    return this.props.selectedItems.map((item) => {
      return this.props.strategy.toItemData(item)
    }) || new List()
  }

  isSelectedItem(item) {
    return this.props.selectedItems.includes(item.original)
  }

  onChange(items) {
    return this.props.onChange(items.map((item) => {
      return this.props.strategy.toOriginalData(item)
    }))
  }

  items() {
    return this.props.strategy.allItems(this.props.items)
  }

  visibleItems() {
    return this.props.strategy.visibleItems(this.items(), this.state)
  }

  toggleSelectedItems(item) {
    let resItems = this.selectedItems() || new List()
    const isRemoving = this.isSelectedItem(item)

    if (isRemoving) {
      resItems = resItems.delete(
        resItems.findIndex((resItem) => {
          return resItem.id === item.id
        })
      )
    } else {
      if (this.props.strategy.canMultipleSelect()) {
        resItems = resItems.push(item)
      } else {
        resItems = List.of(item)
      }
    }

    return resItems
  }

  renderList() {
    return this.visibleItems().map((item) => {
      return this.props.strategy.renderItem(this, item)
    })
  }

  renderHeaders() {
    return this.props.strategy.createHeaders(this)
  }

  render() {
    return (
      <div styleName='base'>
        <div styleName="list-wrapper">
          <ul styleName="list">
            { this.renderHeaders() }
            { this.renderList() }
          </ul>
        </div>
      </div>
    )
  }
}

SelectBox.propTypes = {
  items: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  selectedItems: PropTypes.object.isRequired,
  strategy: PropTypes.object.isRequired,
}

export default CSSModules(SelectBox, styles)

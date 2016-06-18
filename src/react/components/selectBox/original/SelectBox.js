import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import { List } from 'immutable'

import styles from './SelectBox.scss'

class SelectBox extends Component {
  onChange() {
    console.log('onchange must overwrite in sub class!!!')
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
      resItems = resItems.push(item)
    }

    this.onChange(resItems)
  }

  isSelectedItem(item) {
    return this.props.selectedItems.includes(item)
  }

  render() {
    console.log("this.props.selectedItems", this.props.selectedItems)
    return(
      <div styleName="base">
        <div styleName="list-wrapper">
          <ul styleName="list">
            {
              this.props.items.map((item) => {
                return (
                  <li
                    key={item.id}
                    styleName="row"
                    onClick={this.onClickItem.bind(this, item)}
                  >
                    <div styleName="row-name">{ item.name }</div>
                    { this.isSelectedItem(item) ? (
                        <div styleName="row-selected">
                          selected
                        </div>
                      ) : (null)
                    }
                  </li>
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

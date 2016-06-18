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

  onChange() {
    console.log('onchange must overwrite in sub class!!!')
  }

  displayName(item) {
    console.log('displayName must overwrite in sub class!!!')
  }

  displayExtra(item) {
    console.log('displayExtra must overwrite in sub class!!!')
  }

  searchItem(text) {
    console.log('searchItem must overwrite in sub class!!!')
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
      if (this.props.multipleSelect) {
        resItems = resItems.push(item)
      } else {
        resItems = List.of(item)
      }
    }

    this.onChange(resItems)
  }

  isSelectedItem(item) {
    return this.props.selectedItems.includes(item)
  }

  onSearchInputChange(e) {
    const text = e.target.value
    const visibleItems = this.searchItem(this.props.items, text)
    this.setState({ visibleItems })
  }

  render() {
    return(
      <div styleName="base">
        <div styleName="list-wrapper">
          <ul styleName="list">
            {
              this.props.searchable ? (
                <input
                  styleName="search-input"
                  onChange={this.onSearchInputChange.bind(this)}
                />
              ) : (null)
            }
            {
              this.state.visibleItems.map((item) => {
                return (
                  <li
                    key={item.id}
                    styleName="row"
                    onClick={this.onClickItem.bind(this, item)}
                  >
                    <div styleName="row-name">
                      { this.displayName(item) }
                      { this.displayExtra(item) }
                    </div>
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

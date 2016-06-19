import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import styles from './ItemRow.scss'

class ItemRow extends Component {
  onClick(e) {
    this.props.onClick(e)
  }

  render() {
    return (
      <li
        onClick={this.onClick.bind(this)}
        styleName="row"
      >
        <div styleName="row-name">
          <span>{ this.props.name }</span>
        </div>
        <div>
          {this.props.selected ? (
            <div styleName="row-selected">
              selected
            </div>
            ) : (null)
          }
        </div>
      </li>
    )
  }
}

export default CSSModules(ItemRow, styles)

import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import styles from './CompanyRow.scss'

class CompanyRow extends Component {
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
          <span>{ `${this.props.name}(${this.props.country})` }</span>
        </div>
        <div styleName="row-selected">
          {this.props.selected ? <div>selected</div> : null}
        </div>
      </li>
    )
  }
}

export default CSSModules(CompanyRow, styles)

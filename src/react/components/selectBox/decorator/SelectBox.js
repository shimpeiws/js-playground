import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import { List } from 'immutable'

import styles from './SelectBox.scss'


class SelectBox extends Component {
  static contextTypes = {
    renderRow: React.PropTypes.any
  }

  constructor(props) {
    super(props)
    this.state = {
      visibleItems: this.props.items,
    }
  }

  render() {
    console.log("selectbox render", this.context)
    return(
      <div styleName="base">
        <div styleName="list-wrapper">
          <ul styleName="list">
            {
              this.props.items.map((item) => {
                return this.context.renderRow()
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default CSSModules(SelectBox, styles)

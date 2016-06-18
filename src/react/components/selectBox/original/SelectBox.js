import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import styles from './SelectBox.scss'

class SelectBox extends Component {
  render() {
    return(
      <div styleName="base">
        <p>Hello Original!!!</p>
      </div>
    )
  }
}

export default CSSModules(SelectBox, styles)

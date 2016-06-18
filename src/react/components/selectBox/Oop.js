import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import styles from './Oop.scss'

class Oop extends Component {
  render() {
    return(
      <div styleName="base">
        <p>Hello OOP!!!</p>
      </div>
    )
  }
}

export default CSSModules(Oop, styles)

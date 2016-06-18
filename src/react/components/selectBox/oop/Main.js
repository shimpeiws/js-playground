import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import SelectBox from './SelectBox'

import styles from './Main.scss'

class Main extends Component {
  render() {
    return(
      <div styleName="base">
        <p>OOP Main</p>
        <SelectBox />
      </div>
    )
  }
}

export default CSSModules(Main, styles)

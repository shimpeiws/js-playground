import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import { List } from 'immutable'

import ItemSelectBox from './ItemSelectBox'

import styles from './Main.scss'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItems: new List(),
    }
  }

  onSelectItem(selectedItems) {
    this.setState({ selectedItems })
  }

  render() {
    return(
      <div styleName="base">
        <p>Original Main</p>
        <ItemSelectBox
          items={ this.props.items }
          selectedItems={ this.state.selectedItems }
          onSelectItem={ this.onSelectItem.bind(this) }
        />
      </div>
    )
  }
}

export default CSSModules(Main, styles)

import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import { List } from 'immutable'

import ItemSelectBox from './ItemSelectBox'

import styles from './Main.scss'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isItemSelectBoxOpen: false,
      isCompanySelectBoxOpen: false,
      selectedItems: new List(),
      selectedCompanies: new List(),
    }
  }

  onSelectItem(selectedItems) {
    this.setState({ selectedItems })
  }

  onSelectCompany(selectedCompanies) {
    this.setState({ selectedCompanies })
  }

  onClickItemSelectBoxWrapper() {
    this.setState({ isItemSelectBoxOpen: !this.state.isItemSelectBoxOpen })
  }

  onClickCompanySelectBoxWrapper() {
    this.setState({ isCompanySelectBoxOpen: !this.state.isCompanySelectBoxOpen })
  }

  render() {
    return(
      <div styleName="base">
        <p>Decorator Main</p>
        <div onClick={this.onClickItemSelectBoxWrapper.bind(this)}>
          ItemSelectBox
        </div>
        { this.state.isItemSelectBoxOpen ? (
          <div><ItemSelectBox /></div>
          ) : (null)
        }
        <div onClick={this.onClickCompanySelectBoxWrapper.bind(this)}>
          ComapnySelectBox
        </div>
        { this.state.isCompanySelectBoxOpen ? (
            null
          ) : (null)
        }
      </div>
    )
  }
}

export default CSSModules(Main, styles)

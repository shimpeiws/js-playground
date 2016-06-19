import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import { List } from 'immutable'

import SelectBox from './SelectBox'
import ItemStrategy from './strategies/ItemStrategy'
import CompanyStrategy from './strategies/CompanyStrategy'

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
        <p>OOP Main</p>
        <div onClick={this.onClickItemSelectBoxWrapper.bind(this)}>
          ItemSelectBox
        </div>
        { this.state.isItemSelectBoxOpen ? (
            <SelectBox
              items={ this.props.items }
              selectedItems={ this.state.selectedItems }
              onChange={ this.onSelectItem.bind(this) }
              strategy={ new ItemStrategy() }
            />
          ) : (null)
        }
      </div>
    )
  }
}

export default CSSModules(Main, styles)

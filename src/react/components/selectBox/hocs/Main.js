import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import { List } from 'immutable'

import SelectBox from './SelectBox'
import { ItemEnhancer } from './enhancers/ItemEnhancer'

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
    const ItemSelectBox = ItemEnhancer(SelectBox)
    return(
      <div styleName="base">
        <p>HoCs Main</p>
        <div onClick={this.onClickItemSelectBoxWrapper.bind(this)}>
          ItemSelectBox
        </div>
        { this.state.isItemSelectBoxOpen ? (
          <ItemSelectBox
            items={ this.props.items }
            selectedItems={ this.state.selectedItems }
            onSelectItem={ this.onSelectItem.bind(this) }
          />
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

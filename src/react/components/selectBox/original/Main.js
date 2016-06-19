import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import { List } from 'immutable'

import ItemSelectBox from './ItemSelectBox'
import CompanySelectBox from './CompanySelectBox'

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
        <p>Original Main</p>
        <div onClick={this.onClickItemSelectBoxWrapper.bind(this)}>
          ItemSelectBox
        </div>
        { this.state.isItemSelectBoxOpen ? (
            <ItemSelectBox
              items={ this.props.items }
              selectedItems={ this.state.selectedItems }
              onSelectItem={ this.onSelectItem.bind(this) }
              multipleSelect={false}
              searchable={false}
            />
          ) : (null)
        }
        <div onClick={this.onClickCompanySelectBoxWrapper.bind(this)}>
          ComapnySelectBox
        </div>
        { this.state.isCompanySelectBoxOpen ? (
            <CompanySelectBox
              items={ this.props.companies }
              selectedItems={ this.state.selectedCompanies }
              onSelectComapny={ this.onSelectCompany.bind(this) }
              multipleSelect={true}
              searchable={true}
            />
          ) : (null)
        }
      </div>
    )
  }
}

export default CSSModules(Main, styles)

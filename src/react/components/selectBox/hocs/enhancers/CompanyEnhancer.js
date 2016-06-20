import React, {Component, PropTypes} from 'react'

export const CompanyEnhancer = ComposedComponent => class extends Component {
  constructor(props) {
    super(props)
    this.state = { searchText: '' }
  }

  canMultipleSelect() {
    return true
  }

  onSearchTextChange(e) {
    console.log("e.target.value")
    this.setState( { searchText: e.target.value })
  }

  filterItems(items) {
    const regexp = new RegExp(`(.*?)${this.state.searchText.toLowerCase()}(.*?)`)
    return items.filter((item) => {
      return item.companyName.toLowerCase().search(regexp) !== -1
    })
  }

  renderHeader() {
    return (
      <li>
        <input
          ref="input"
          type="text"
          name="title"
          value={this.state.searchText}
          onChange={this.onSearchTextChange.bind(this)}
          styleName="search-input"
        />
      </li>
    )
  }

  renderRow(selectBox, company, selected) {
    return (
      <li
        onClick={selectBox.onClick.bind(selectBox, company)}
        styleName="row"
      >
        <div styleName="row-name">
          <span>{ `${company.companyName}(${company.country})` }</span>
        </div>
        <div>
          {selected ? (
            <div styleName="row-selected">
              selected
            </div>
            ) : (null)
          }
        </div>
      </li>
    )
  }

  render() {
    return <ComposedComponent
      {...this.props}
      canMultipleSelect={this.canMultipleSelect}
      renderHeader={this.renderHeader.bind(this)}
      renderRow={this.renderRow}
      filterItems={this.filterItems.bind(this)}
    />
  }
};

import React, {Component, PropTypes} from 'react'

export const CompanyEnhancer = ComposedComponent => class extends Component {
  canMultipleSelect() {
    return true
  }

  renderHeader() {
    return null
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
      renderHeader={this.renderHeader}
      renderRow={this.renderRow}
    />
  }
};

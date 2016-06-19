import React, {Component, PropTypes} from 'react'

export const ItemEnhancer = ComposedComponent => class extends Component {
  canMultipleSelect() {
    return false
  }

  renderHeader() {
    return null
  }

  renderRow(item) {
    return (
      <li
        onClick={this.onClick.bind(this)}
        styleName="row"
      >
        <div styleName="row-name">
          <span>{ item.name }</span>
        </div>
        <div>
          {this.isSelectedItem(item) ? (
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

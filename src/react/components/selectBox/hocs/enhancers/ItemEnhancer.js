import React, {Component, PropTypes} from 'react'

export const ItemEnhancer = ComposedComponent => class extends Component {
  canMultipleSelect() {
    return false
  }

  renderHeader() {
    return null
  }

  renderRow(selectBox, item, selected) {
    return (
      <li
        onClick={selectBox.onClick.bind(selectBox, item)}
        styleName="row"
      >
        <div styleName="row-name">
          <span>{ item.name }</span>
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

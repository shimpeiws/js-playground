import React, { Component, PropTypes } from 'react'

import context from './Decorator'

import SelectBox from './SelectBox'

const contextTypes = {
  renderRow: PropTypes.func.isRequired,
  canMultipleSelect: PropTypes.func.isRequired,
}

const myContext = {
  renderRow: ((item, selected, onClick) => {
    return (
      <li
        onClick={onClick.bind(this, item)}
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
  }),

  canMultipleSelect: () => (false),
}

@context(contextTypes, myContext)
export default class ItemSelectBox extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <SelectBox
          items={this.props.items}
          selectedItems={this.props.selectedItems}
          onSelectItem={this.props.onSelectItem}
        />
      </div>
    )
  }
}

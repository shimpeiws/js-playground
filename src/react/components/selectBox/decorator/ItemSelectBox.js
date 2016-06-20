import React, { Component, PropTypes } from 'react'

import context from './Decorator'

import SelectBox from './SelectBox'

const contextTypes = {
  renderRow: PropTypes.func.isRequired,
}

const myContext = {
  renderRow: (() => {
    console.log("renderRow")
    return (
      <div>Render Row</div>
    )
  }),
}

@context(contextTypes, myContext)
export default class ItemSelectBox extends Component {
  constructor(props) {
    super(props)
    console.log("ItemSelectBox")
  }
  render() {
    console.log("ItemSelectBox")
    return (
      <div>
        <SelectBox />
      </div>
    )
  }
}

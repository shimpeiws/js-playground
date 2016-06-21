import React, { Component, PropTypes } from 'react'

export default function context(contextTypes, context) {
  return function (DecoratedComponent) {
    return class extends Component {
      static childContextTypes = contextTypes
      getChildContext() {
        return context
      }
      render() {
        return (
          <DecoratedComponent {...this.props} />
        )
      }
    }
  }
}

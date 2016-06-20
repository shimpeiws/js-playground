import React, { Component, PropTypes } from 'react'

export default function context(contextTypes, context) {
  return function (DecoratedComponent) {
    return class {
      static childContextTypes = contextTypes
      getChildContext() {
        return context
      }
      render() {
        console.log("context render!!!")
        return (
          <DecoratedComponent {...this.props} />
        )
      }
    }
  }
}

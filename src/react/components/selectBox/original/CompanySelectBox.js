import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import { List } from 'immutable'

import SelectBox from './SelectBox'
import styles from './SelectBox.scss'

class CompanySelectBox extends SelectBox {
  onChange(companies) {
    console.log("onChange")
    this.props.onSelectComapny(companies)
  }

  displayName(company) {
    return company.companyName
  }

  displayExtra(company) {
    return `(${company.country})`
  }
}

export default CSSModules(CompanySelectBox, styles)

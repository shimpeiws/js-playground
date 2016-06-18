import React, {Component, PropTypes} from 'react'
import CSSModules from 'react-css-modules'

import { List } from 'immutable'

import SelectBox from './SelectBox'
import styles from './SelectBox.scss'

class CompanySelectBox extends SelectBox {
  onChange(companies) {
    this.props.onSelectComapny(companies)
  }

  displayName(company) {
    return company.companyName
  }

  displayExtra(company) {
    return `(${company.country})`
  }

  searchItem(companies, text) {
    let regexp = new RegExp(`(.*?)${text.toLowerCase()}(.*?)`)
    return companies.filter((company) => {
      return company.companyName.toLowerCase().search(regexp) !== -1
    })
  }
}

export default CSSModules(CompanySelectBox, styles)

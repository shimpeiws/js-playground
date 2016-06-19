import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import CSSModules from 'react-css-modules'

import styles from './SearchInput.scss'

class SearchInput extends Component {

  onSearchTextChange(e) {
    this.props.onSearchTextChange(e.target.value)
  }

  render() {
    return (
      <li>
        <input
          ref="input"
          type="text"
          name="title"
          value={this.props.searchText}
          onChange={this.onSearchTextChange.bind(this)}
          styleName="search-input"
        />
      </li>
    )
  }
}

SearchInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func,
}

export default CSSModules(SearchInput, styles)

import _ from 'lodash'
import { List } from 'immutable'
import React from 'react'

import SearchInput from './../views/SearchInput'
import SelectBoxPlugin from './SelectBoxPlugin'

export default class SearchItemsPlugin extends SelectBoxPlugin {
  filterItems(items, conditions) {
    return this.plugin.filterItems(items, conditions).filter((item) => {
      return item.isMatchedText(conditions.searchText)
    })
  }

  getInitialState() {
    return _.extend(this.plugin.getInitialState(), {
      searchText: '',
    })
  }

  createHeaders(selectBox) {
    return this.plugin
      .createHeaders(selectBox)
      .insert(0, this.renderInput(selectBox))
  }

  onSearchTextChange(selectBox, searchText) {
    selectBox.setState({ searchText })
  }

  renderInput(selectBox) {
    return (
      <SearchInput
        key="search_item_input"
        searchText={selectBox.state.searchText}
        onSearchTextChange={this.onSearchTextChange.bind(this, selectBox)}
      />
    )
  }
}

export function createSearchItemsPlugin(placeHolderText) {
  return (plugin) => {
    return new SearchItemsPlugin(plugin, placeHolderText)
  }
}

export function createSearchItemsPlugin() {
  return (plugin) => {
    return new SearchItemsPlugin(plugin)
  }
}

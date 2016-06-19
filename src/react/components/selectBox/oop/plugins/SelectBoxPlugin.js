import { List } from 'immutable'

export default class SelectBoxPlugin {
  constructor(plugin) {
    this.plugin = plugin
  }

  getInitialState() {
    return this.plugin ? this.plugin.getInitialState() : {}
  }

  filterItems(initialItems, conditions) {
    return this.plugin ? this.plugin.filterItems(initialItems, conditions) : initialItems
  }

  createHeaders(selectBox) {
    return this.plugin ? this.plugin.createHeaders(selectBox) : new List()
  }

  addItems(items) {
    return !!this.plugin ? this.plugin.addItems(items) : items
  }
}

import { List } from 'immutable'

import SelectBoxPlugin from './../plugins/SelectBoxPlugin'

export default class SelectBoxStrategy {
  constructor(options={}) {
    this.options = options
    this.plugin = new SelectBoxPlugin()
    this.initializePlugin()
  }

  initializePlugin() {}

  visibleItems(items, conditions) {
    return this.plugin.filterItems(items, conditions)
  }

  getInitialState() {
    return this.plugin.getInitialState()
  }

  allItems(items) {
    return this.plugin.addItems(this.initialItems(items))
  }

  addPlugin(createPlugin) {
    this.plugin = createPlugin(this.plugin)
  }

  createHeaders(selectBox) {
    return this.plugin.createHeaders(selectBox)
  }

  initialItems(items) {
    return items.map((item) => {
        return this.toItemData(item)
      }) || new List()
  }

  onClickItem(selectBox, item) {
    const nextSelectedItems = selectBox.toggleSelectedItems(item)
    selectBox.onChange(nextSelectedItems)
  }
}

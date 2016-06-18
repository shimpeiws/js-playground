import { List, Record } from 'immutable'

const _Item = Record({
  id: null,
  name: '',
})

export default class Item extends _Item {
  static fromJS(item = {}) {
    return (new this).merge({
      id: parseInt(item.id),
      name: item.name,
    })
  }
}

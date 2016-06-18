import { List, Record } from 'immutable'

const _Company = Record({
  id: null,
  companyName: '',
  country: '',
})

export default class Company extends _Company {
  static fromJS(company = {}) {
    return (new this).merge({
      id: parseInt(company.id),
      companyName: company.companyName,
      country: company.country,
    })
  }
}

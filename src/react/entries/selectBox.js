import React from 'react'
import ReactDOM from 'react-dom'

import { List } from 'immutable'

import Item from './../lib/records/Item'
import Company from './../lib/records/Company'

import OriginalSelectBox from './../components/selectBox/original/Main'
import OOPSelectBox from './../components/selectBox/oop/Main'
import HoCsSelectBox from './../components/selectBox/hocs/Main'
import DecoratorSelectBox from './../components/selectBox/decorator/Main'

const itemData = [
  {
    id: 1,
    name: 'kohh',
  },
  {
    id: 2,
    name: 'kan',
  },
  {
    id: 3,
    name: 'ZORN',
  },
  {
    id: 4,
    name: 'NORIKIYO',
  },
  {
    id: 5,
    name: 'DEN',
  },
  {
    id: 6,
    name: 'Zeebra',
  },
  {
    id: 7,
    name: 'PUNPEE',
  },
  {
    id: 8,
    name: 'DOPENESS',
  },
  {
    id: 9,
    name: 'AKLO',
  },
  {
    id: 10,
    name: 'SALU',
  },
]

const items = List.of(
  ...(itemData.map((item) => { return Item.fromJS(item) }))
)

const companyData = [
  {
    id: 1,
    companyName: 'Gunsmith Production',
    country: 'UK',
  },
  {
    id: 2,
    companyName: 'SYOWA',
    country: 'US',
  },
  {
    id: 3,
    companyName: 'YUKICHI RECORDS',
    country: 'JP',
  },
  {
    id: 4,
    companyName: 'POLYDOR',
    country: 'ID',
  },
  {
    id: 5,
    companyName: 'New Japan Records',
    country: 'CH',
  },
]

const companies = List.of(
  ...(companyData.map((company) => { return Company.fromJS(company) }))
)

ReactDOM.render(
  (
    <div>
      <OriginalSelectBox
        items = { items }
        companies = { companies }
      />
      <OOPSelectBox
        items = { items }
        companies = { companies }
      />
      <HoCsSelectBox
        items = { items }
        companies = { companies }
      />
      <DecoratorSelectBox
        items = { items }
        companies = { companies }
      />
    </div>
  ),
  document.getElementById('content')
);

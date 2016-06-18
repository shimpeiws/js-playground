import React from 'react'
import ReactDOM from 'react-dom'

import { List } from 'immutable'

import Item from './../lib/records/Item'

import OriginalSelectBox from './../components/selectBox/original/Main'
import OOPSelectBox from './../components/selectBox/oop/Main'

const data = [
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
  ...(data.map((item) => { return Item.fromJS(item) }))
)

ReactDOM.render(
  (
    <div>
      <OriginalSelectBox
        items = { items }
      />
      <OOPSelectBox
        items = { items }
      />
    </div>
  ),
  document.getElementById('content')
);

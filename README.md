# react-table-modern

> A Modern Table Made using React 🔥

[![NPM](https://img.shields.io/npm/v/react-table-modern.svg)](https://www.npmjs.com/package/react-table-modern) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-table-modern
```

## Usage

```tsx
import React, { Component } from 'react'

import ReactTableModern from 'react-table-modern'

const data = [
  {
    name: 'Abdul Ghani',
    address: { city: 'Hyd', street: 'stret', country: 'India' },
    phone: '9191919191',
    email: 'hello@abdulghani.tech',
    website: 'abdulghani.tech'
  },
  {
    name: 'Abdul Ghani 2',
    address: { city: 'Bng', street: '1et', country: 'USA' },
    phone: '9191975571',
    email: 'hi@abdulghani.tech',
    website: 'abdulghani.tech'
  },
  {
    name: 'Abdul Ghani 3',
    address: { city: 'Bng', street: '1et', country: 'USA' },
    phone: '9191975571',
    email: 'hi@abdulghani.tech',
    website: 'abdulghani.tech'
  },
  {
    name: 'Abdul Ghani 4',
    address: { city: 'Bng', street: '1et', country: 'USA' },
    phone: '9191975571',
    email: 'hi@abdulghani.tech',
    website: 'abdulghani.tech'
  },
  {
    name: 'Abdul Ghani 5',
    address: { city: 'Bng', street: '1et', country: 'USA' },
    phone: '9191975571',
    email: 'hi@abdulghani.tech',
    website: 'abdulghani.tech'
  },
  {
    name: 'Abdul Ghani 6',
    address: { city: 'Bng', street: '1et', country: 'USA' },
    phone: '9191975571',
    email: 'hi@abdulghani.tech',
    website: 'abdulghani.tech'
  }
]

const columns = [
  {
    dataField: 'name',
    text: 'Name',
  },
  {
    dataField: 'address.country',
    text: 'Address',
  },
  {
    dataField: 'phone',
    text: 'Phone'
  },
  {
    dataField: 'email',
    text: 'Email'
  },
  {
    dataField: 'website',
    text: 'Website'
  }
]

class Example extends Component {
  render() {
    return (
      <ReactTableModern
        data={data}
        columns={columns}     
      />
    )
  }
}
```

---

Props

| Prop | Type | Default | Required |
| --- | --- | --- | --- |
| data | Array Of Objects | [] | true |
| columns | Array Of Objects | [] | true |
| paginationRequired| boolean | true | false |
| paginationItemsPerPage | number | 5 | false |
| tableWrapperStyle | React.CSSProperties | - | false |
| tableStyle | React.CSSProperties | - | false |
| tableHeaderStyle | React.CSSProperties | - | false |
| tableHeaderCellsStyle | React.CSSProperties | - | false |
| tableCellsStyle | React.CSSProperties | - | false |
| nextAndPrevBtnStyle | React.CSSProperties | - | false |
| PaginationWrapperStyle | React.CSSProperties | - | false |
| paginationBtns | React.CSSProperties | - | false |

---


## License

MIT © [abdulghanitech](https://github.com/abdulghanitech)

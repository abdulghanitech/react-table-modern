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
import 'react-table-modern/dist/index.css'

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

| Prop | Type | Default |
| --- | --- | --- |
| data | Array Of Objects | [] |
| columns | Array Of Objects | [] |
| paginationRequired| boolean | true |
| paginationItemsPerPage | number | 5 |


## License

MIT © [abdulghanitech](https://github.com/abdulghanitech)

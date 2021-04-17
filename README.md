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

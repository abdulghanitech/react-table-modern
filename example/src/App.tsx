import React from 'react'
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

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <h1>Say Hello to Modern React Table 🔥</h1>

      <ReactTableModern
        data={data}
        columns={columns}
        // paginationItemsPerPage={3}
        // tableWrapperStyle={{backgroundColor: "#FFF"}}
        // tableCellsStyle={{padding: 20}}
        // paginationRequired={false}
      />
    </div>
  )
  
}

export default App

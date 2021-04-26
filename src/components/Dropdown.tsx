import React, { useState } from 'react'
import ChevronDown from '../assets/chevronDown'

interface DropdownProps {
  paginationItemsPerPage?: number
  itemsPerPage: number
  setItemsPerPage: (itemsPerPage: number) => void
  selectWrapperStyle?: React.CSSProperties
  selectStyle?: React.CSSProperties
}

const Dropdown = (props: DropdownProps) => {
  const {
    selectWrapperStyle,
    // selectStyle,
    paginationItemsPerPage,
    itemsPerPage,
    setItemsPerPage
  } = props
  const [showDropdown, setshowDropdown] = useState(false)
  return (
    <div style={selectWrapperStyle}>
      <div
        style={{ display: 'flex', cursor: 'pointer' }}
        onClick={() => setshowDropdown(!showDropdown)}
      >
        <div>{itemsPerPage + ' items'}</div>

        <ChevronDown />
      </div>

      {showDropdown && (
        <div
          style={{
            position: 'absolute',
            top: 50,
            left: 0,
            background: '#FFF',
            padding: '6px 12px',
            width: 100,
            borderRadius: '8px',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'rgba(156, 163, 175)'
          }}
        >
          {[5, 10, 25, 50, paginationItemsPerPage].map((item) => (
            <div
              onClick={() => item && setItemsPerPage(item)}
              style={{ padding: '6px 8px' }}
              className='dropdownItem'
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown

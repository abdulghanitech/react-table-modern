import React, { useState } from 'react'
// import CSS from 'csstype'
import getCell from './utils'

interface Props {
  data: any[]
  columns: any[]
  paginationRequired?: boolean
  paginationItemsPerPage?: number
  tableWrapperStyle?: React.CSSProperties
  tableStyle?: React.CSSProperties
  tableHeaderStyle?: React.CSSProperties
  tableHeaderCellsStyle?: React.CSSProperties
  tableCellsStyle?: React.CSSProperties
}

const ReactTableModern = (props: Props) => {
  const {
    data,
    columns,
    paginationRequired = true,
    paginationItemsPerPage = 5
  } = props

  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(5)

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(paginationItemsPerPage)

  const count = data.length || 0

  const getTotalPages = () => {
    return Math.ceil(count / itemsPerPage)
  }

  const getPageNumbers = () => {
    let result: Array<number> = []
    if (count && itemsPerPage) {
      const totalPages = getTotalPages()

      const allPages = []
      for (let index = 0; index < totalPages; index++) {
        allPages[index] = index + 1
      }
      if (totalPages === 0) return result

      return allPages.slice(startIndex, endIndex)
    }
    return result
  }

  let paginatedDataArray = paginationRequired
    ? data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : data

  const PaginationWrapperStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '1rem',
    marginTop: "4px"
  }

  const selectWrapperStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '9999px',
    paddingLeft: '1rem',
    paddingRight: '0.5rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'rgba(156, 163, 175)',
    outline: '2px solid transparent',
    outlineOffset: '2px'
  }

  const selectStyle: React.CSSProperties = {
    appearance: 'none',
    outline: '2px solid transparent',
    outlineOffset: '2px'
  }

  const nextAndPrevBtnStyle: React.CSSProperties = {
    backgroundColor: '#F0F0F1',
    borderRadius: '9999px',
    padding: '0.5rem 1rem',
    borderStyle: 'none',
    color: 'black'
  }

  const paginationBtns: React.CSSProperties = {
    borderRadius: '9999px',
    color: 'black',
    height: '2.5rem',
    width: '2.5rem',
    margin: '0 0.25rem',
    borderStyle: 'solid'
  }

  const Pagination = () => {
    return (
      <div style={PaginationWrapperStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={selectWrapperStyle}>
            <select
              style={selectStyle}
              value={itemsPerPage}
              onChange={(e) => {
                let itemsPerPage = Number(e.target.value)
                setItemsPerPage(itemsPerPage)
              }}
            >
              {[5, 10, 25, 50, paginationItemsPerPage].map((item) => (
                <option value={item}>{item + ' items'}</option>
              ))}
            </select>
            <span className='text-md text-blue-600 bp3-icon bp3-icon-chevron-down' />
          </div>
          per page
        </div>

        <div>
          <div style={{ display: 'flex' }}>
            <button
              style={{
                ...nextAndPrevBtnStyle,
                cursor: startIndex >= 5 ? 'pointer' : 'not-allowed'
              }}
              disabled={!(startIndex >= 5)}
              onClick={() => {
                if (startIndex < getTotalPages()) {
                  if (startIndex >= 5) {
                    setStartIndex(startIndex - 5)
                    setEndIndex(endIndex - 5)
                  }
                }
              }}
            >
              Previous
            </button>
            {getPageNumbers().length > 0 &&
              getPageNumbers().map((item: number) => (
                <button
                  style={{
                    ...paginationBtns,
                    backgroundColor: currentPage === item ? '#FFF' : '#F0F0F1',
                    borderWidth: currentPage === item ? 2 : undefined,
                    borderColor:
                      currentPage === item ? 'rgba(156, 163, 175)' : undefined
                  }}
                  onClick={() => setCurrentPage(item)}
                >
                  {item}
                </button>
              ))}
            <button
              style={{
                ...nextAndPrevBtnStyle,
                cursor: getTotalPages() > endIndex ? 'pointer' : 'not-allowed'
              }}
              disabled={!(getTotalPages() > endIndex)}
              onClick={() => {
                if (getTotalPages() > endIndex) {
                  setStartIndex(startIndex + 5)
                  setEndIndex(endIndex + 5)
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    )
  }

  const tableWrapperStyle: React.CSSProperties = {
    backgroundColor: '#f9f9f9',
    ...props.tableWrapperStyle
  }

  const tableStyle: React.CSSProperties = {
    borderCollapse: 'separate',
    borderSpacing: '0.25em 0.25em',
    width: '100%',
    ...props.tableStyle
  }

  const tableHeaderStyle: React.CSSProperties = {
    backgroundColor: '#f0f0f1',
    color: '#9696a0',
    fontWeight: 400,
    ...props.tableHeaderStyle
  }

  const tableHeaderCellsStyle: React.CSSProperties = {
    backgroundColor: '#f0f0f1',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    ...props.tableHeaderCellsStyle
  }

  const tableCellsStyle: React.CSSProperties = {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    backgroundColor: '#fff',
    lineHeight: '2rem',
    borderRadius: '0.375rem',
    ...props.tableCellsStyle
  }

  return (
    <div style={tableWrapperStyle}>
      <table style={tableStyle}>
        <tr style={tableHeaderStyle}>
          {columns &&
            columns.length > 0 &&
            columns.map((column) => (
              <td style={tableHeaderCellsStyle}>{column.text}</td>
            ))}
        </tr>

        <tbody>
          {data && data.length > 0 && paginatedDataArray
            ? paginatedDataArray.map((item) => {
                return (
                  <tr>
                    {columns &&
                      columns.length > 0 &&
                      columns.map((column) => {
                        const { dataField } = column
                        const cell = getCell(item, dataField)
                        return <td style={tableCellsStyle}>{cell}</td>
                      })}
                  </tr>
                )
              })
            : 'No Data!'}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default ReactTableModern

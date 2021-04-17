import React, { useState } from 'react'
import styles from './styles.module.css'
import getCell from './utils'

interface Props {
  data: any[]
  columns: any[]
  paginationRequired?: boolean
  paginationItemsPerPage?: number
}

const ReactTableModern = ({
  data,
  columns,
  paginationRequired = true,
  paginationItemsPerPage = 5
}: Props) => {
  
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

  const Pagination = () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '1rem',
          marginTop: 4
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div
            className='select-wrapper'
            style={{
              backgroundColor: 'white',
              borderRadius: 9999,
              paddingLeft: '1rem',
              paddingRight: '0.5rem',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: 'rgba(156, 163, 175)',
              outline: '2px solid transparent',
              outlineOffset: 2
            }}
          >
            <select
              style={{
                appearance: 'none',
                outline: '2px solid transparent',
                outlineOffset: 2
              }}
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
                backgroundColor: '#F0F0F1',
                cursor: startIndex >= 5 ? 'pointer' : 'not-allowed',
                borderRadius: 9999,
                padding: '0.5rem 1rem',
                borderStyle: 'none',
                color: 'black'
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
                    backgroundColor: currentPage === item ? '#FFF' : '#F0F0F1',
                    borderRadius: 9999,
                    color: 'black',
                    height: '2.5rem',
                    width: '2.5rem',
                    margin: '0 0.25rem',
                    borderStyle: 'solid',
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
                backgroundColor: '#F0F0F1',
                cursor: getTotalPages() > endIndex ? 'pointer' : 'not-allowed',
                borderRadius: 9999,
                padding: '0.5rem 1rem',
                borderStyle: 'none',
                color: 'black'
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

  return (
    <div style={{ backgroundColor: '#f9f9f9' }}>
      <table className={styles.reactTableModern}>
        <tr className={styles.reactTableModernHeader}>
          {columns &&
            columns.length > 0 &&
            columns.map((column) => (
              <td className={styles.reactTableModernHeaderCells}>
                {column.text}
              </td>
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
                        return (
                          <td className={styles.reactTableModernCells}>
                            {cell}
                          </td>
                        )
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

import React from 'react'
import ReactSelect from 'react-select'

const Select = (props) => {
  return (
    <ReactSelect
      className='select'
      {...props}
    />
  )
}

export default Select

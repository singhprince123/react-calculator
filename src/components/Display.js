import React from 'react'

export default function Display(props) {

    const data = props.data.join('')
     
  return (
    <div className='Display' id="display">
        {data}
    </div>
  )
}

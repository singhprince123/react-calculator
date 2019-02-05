import React from 'react'

export default function Button(props) {

    const { size, value , id , label , click} = props;
  return (
    <div className="Button" 
          onClick = { (e)=> click(e)}
          id={id}
          data-value={value}
          data-size={size}>
      {label}
    </div>
  )
}

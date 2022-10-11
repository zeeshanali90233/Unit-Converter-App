import React from 'react'

export const ShowResult = (props) => {
    let showStyle={fontStyle:"italic",}
  return (
  
    <div style={showStyle}>
        {console.log(props.unit)}
        <h4 >Result: {props.answer}{props.unit}</h4>
    </div>
  )
}

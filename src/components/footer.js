import React from 'react'

export default function Footer () {
    let currYear=new Date().getFullYear();
    let footerStyle={
      border:"2px solid green"
    }
  return (
    <div className='footer bg-dark text-white py-2' style={footerStyle}>
        <p>Copyright&copy; {currYear} MyUnitConverter.com</p>
    </div>
  )
}

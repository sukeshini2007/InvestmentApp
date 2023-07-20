import React from 'react'
import '../styles/Header.css'
import Logo from '../Assests/img.jpg'
export const Header = () => {
  return (
    <div className="header">
      <img src={Logo}></img>
      <h1>Invesment Calculator</h1>
    </div>
  )
}

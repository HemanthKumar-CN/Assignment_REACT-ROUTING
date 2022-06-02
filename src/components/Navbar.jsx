import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-evenly", border: "1px  red", height: "8vh", alignItems: "center", backgroundColor: "whitesmoke" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
    </div>
  )
}

export default Navbar
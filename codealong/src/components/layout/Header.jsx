import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Personal Listings</h1>
      <Link style={linkStyle} to="/">Names</Link> | <Link style={linkStyle} to="/emails">Emails</Link> | <Link style={linkStyle} to="/websites">Websites</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;
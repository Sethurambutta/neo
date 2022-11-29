import React from 'react'
import './Footer.css';
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <p>@SETHURAM COPY RIGHTS {year}</p>
    </footer>
  )
}

export default Footer;

import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="inner-footer-container">
        <div className="copyright-info">
          <h5>Copyright 2022 - All rights reserved</h5>
        </div>
        <div className="socials">
          <ul className='social-list-container-footer'>
            <li><a href="https://www.linkedin.com/in/hamza-alvi-378baa1ab" target='_blank' className='footer-link' style={{textDecoration: "none", color:"white"}}>LinkedIn</a></li>
            <li><a href="https://github.com/Hamza719alvi" target='_blank' className='footer-link' style={{textDecoration: "none", color:"white"}}>Github</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer
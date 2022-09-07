import React from 'react'
import './footer.css'

import boldo from '../../assets/boldo.png'

const Footer = () => {
  return (
    <div className='baldoo__footer section__padding'>
      <div className='baldoo__footer-links_logo'>
      <img src={boldo} alt="logo" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non soluta harum sequi ipsam vel cum iusto alias minima incidunt maxime.</p>
      <div className='reseverd'>
        <p>All right reserved</p>
      </div>
      </div>
      <div className="baldoo__footer-links_div">
          <h4>Landings</h4>
          <p>Home</p>
          <p>Products</p>
          <p>Serivces</p>
        </div>
        <div className="baldoo__footer-links_div">
          <h4>Company</h4>
          <p>Home</p>
          <div className='two'>
          <p>Careers</p>
          <p>Hiring</p>
          </div>
          <p>Services</p>
        </div>
        <div className="baldoo__footer-links_div">
          <h4>Resources</h4>
          <p>Blog</p>
          <p>Products</p>
          <p>Services</p>
        </div>
    </div>
  )
}

export default Footer

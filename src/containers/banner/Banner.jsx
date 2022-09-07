import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    <div className='baldoo__banner section__padding'>
      <div className='baldoo__banner-container scale-up-center'>
        <div className='baldoo__banner-content'>
          <h4>Our Numbers</h4>
          <h3>Handshake inforgraphic mass market
            crowdfunding iteration.
          </h3>
        </div>
        <div className='baldoo__banner-grid'>
            <div className='baldoo__banner-grid-child'>
                <div className='baldoo__banner-first'>
                    <h3>120m</h3>
                    <small>Cool feature title</small>
                </div>
                <div className='baldoo__banner-first'>
                    <h3>10.000</h3>
                    <small>Cool feature title</small>
                </div>
                <div className='baldoo__banner-first'>
                    <h3>240</h3>
                    <small>Cool feature title</small>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

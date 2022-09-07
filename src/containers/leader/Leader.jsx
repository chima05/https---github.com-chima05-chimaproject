import React from 'react'
import './leader.css'

import leadership1 from "../../assets/leadership1.png";
import leadership2 from "../../assets/leadership2.png";
import leadership3 from "../../assets/leadership3.png";


const Leader = () => {
  return (
    <div className='baldoo__leader section__padding'>
        <div className='baldoo__leader-container'>
            <div className='baldoo__leader-content'>
                <h4>Our Team</h4>
                <h3>The leadership team</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut quae amet pariatur dolorum non, quidem nihil! Blanditiis nisi officiis dolorum voluptatum aliquam cum reprehenderit recusandae ducimus, qui, error amet explicabo reiciendis odit. Cumque voluptate ea 
                    ipsum repudiandae vitae optio asperiores officia iure soluta sequi.</p>
            </div>
            <div className='baldoo__leader-grid'>
                <div className='baldoo__leader-grid-child'>
                    <div className='baldoo__leader-first'>
                    <img src={leadership1} alt="manager" />
                    <h6>Michael Scott</h6>
                    <small>General Manager</small>
                    </div>
                    <div className='baldoo__leader-first'>
                    <img src={leadership2} alt="manager" />
                    <h6>Dwight Schrute</h6>
                    <small>General Manager</small>
                    </div>
                    <div className='baldoo__leader-first'>
                    <img src={leadership3} alt="manager" />
                    <h6>Pam Beetsley</h6>
                    <small>General Manager</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Leader

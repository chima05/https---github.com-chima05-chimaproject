import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import boldo from '../../assets/boldo.png'


const Menu = () => (
    <>
          <p><a href="product">Product</a></p>
          <p><a href="services">Services</a></p>
          <p><a href="about">About</a></p>
  
    </>
  )

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='baldoo__navbar'>
        <div className='baldoo__navbar-links'>
            <div className='baldoo__navbar-links_logo'>
             <img src={boldo} alt="logo" />
            </div>
            <div className='baldoo__navbar-links_container'>
            <Menu />
            </div>
        </div>

        <div className='baldoo__navbar-sign'>
           <button type='button'>Log In</button>
        </div>
        <div className='baldoo__navbar-menu'>
        {toggleMenu
         ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
         : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="baldoo__navbar-menu_container scale-up-center">
            <div className="baldoo__navbar-menu_container-links">
              <Menu />
              <div className="baldoo__navbar-menu_container-links-sign">
              <button type="button">Log In</button>
              </div>
            </div>
          </div>
        )}
        </div>

    </div>
  )
}

export default Navbar

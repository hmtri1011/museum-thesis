import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../../public/images/logo.png'

const Header = () => {
  return (
    <header>

      <div className="container">
        <div className="top-bar">
          <div className="open-time">
            <p>
              <i className="ion-ios-clock-outline" />
              {' '}
              Museum opening hours: 8AM to 7PM. Open all days
            </p>
          </div>
          <div className="call">
            <p><i className="ion-headphone" /> 1800 123  4659</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="logo">
          {' '}
          <a href="#."><img src={Logo} alt="" /></a>
          {' '}
        </div>

        <nav>
          <ul id="ownmenu" className="ownmenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/history">History</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/event">Events</NavLink></li>
            <li><NavLink to="/sponsor">Sponsors</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

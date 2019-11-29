import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import DrawerToggle from './SideDrawer/DrawerToggleButton'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faInfoCircle, faAddressCard, faFolder } from '@fortawesome/free-solid-svg-icons'
 
const HeroIcon = <FontAwesomeIcon icon={faLaptopCode} />


const Hero = styled.div`
	
`

export default function Navbar(props) {
  return (
    <header className="toolbar">
    <nav className="toolbar__navigation">
      <div>
          <DrawerToggle clicked={props.triggerDrawer}/>
      </div>
      <div className="toolbar__logo">
      <Link to="/"><Hero>{HeroIcon}</Hero></Link>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <NavLink to="/projects" activeClassName="nav-active"><FontAwesomeIcon icon={faFolder}/> PROJECTS</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="nav-active"><FontAwesomeIcon icon={faAddressCard}/> CONTACT</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="nav-active"><FontAwesomeIcon icon={faInfoCircle} /> ABOUT</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  )
}

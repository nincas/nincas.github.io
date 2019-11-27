import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import DrawerToggle from './SideDrawer/DrawerToggleButton'
import styled from 'styled-components'

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
        <Link to="/"><Hero>ONIN</Hero></Link>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  )
}

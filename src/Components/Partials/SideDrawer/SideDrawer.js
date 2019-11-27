import React from 'react'
import { Link } from 'react-router-dom'
import './SideDrawer.css'

const SideDrawer = props => {
    let classDrawer = 'side-drawer';
    if (props.show) {
        classDrawer = 'side-drawer open'
    }
    return (
        <nav className={classDrawer}>
            <ul>
                <li><Link to="/">Projects</Link></li>
                <li><Link to="/">Contacts</Link></li>
                <li><Link to="/">About</Link></li>
            </ul>
        </nav>
    );
}

export default SideDrawer;

import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Contact from './contact'

const Header = ({ siteTitle = 'Lisa Yip' }) => (
    <header>
        <NavLink to='/' ><h2>{siteTitle}</h2></NavLink>
        <ul className='navigation'>
            <li>
                <NavLink exact activeClassName='active' to='/'>Work</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/about'>About</NavLink>
            </li>
            <li>
                <Contact />
            </li>
        </ul>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header

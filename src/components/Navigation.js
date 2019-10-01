import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Headroom from 'react-headroom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import Contact from './contact'


const Navigation = ({ siteTitle = 'Lisa Yip' }) => {

    return (
        <Headroom >
            {/* <header >
                <NavLink activeClassName='' to='/' ><h1>{siteTitle}</h1> </NavLink>
                <ul className='navigation'>
                    <li>
                        <NavLink exact activeClassName='active' to='/'>Work</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/about'>About</NavLink>
                    </li>
                    <li>
                        <a href='http://lisayip.com/Yip_Lisa_Resume.pdf' target='_blank' rel="noopener noreferrer">Resume</a>
                    </li>
                </ul>

            </header> */}
            <header className="header">
                <NavLink activeClassName='' className="site-title" to='/' ><h1>{siteTitle}</h1> </NavLink>

                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className='menu'>
                    <li>
                        <NavLink exact activeClassName='active' to='/'>Work</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/aio'>Case Study</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/style-guide'>Style Guide</NavLink>
                    </li>
                    <li>
                        <a href='http://lisayip.com/Yip_Lisa_Resume.pdf' target='_blank' rel="noopener noreferrer">Resume</a>
                    </li>
                    {/* <li>
                    <Contact />
                </li> */}

                </ul>
            </header>
        </Headroom>

    )
}

Navigation.propTypes = {
    siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
    siteTitle: ``,
}

export default Navigation

// scroll to top
// social media on side vertically